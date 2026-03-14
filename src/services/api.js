import axios from 'axios';



const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});




api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const { data } = await axios.post(
            `${API_BASE_URL}/admin/refresh`,
            {},
            {
              headers: { 'X-Refresh-Token': refreshToken }
            }
          );
          
          localStorage.setItem('access_token', data.data.access_token);
          error.config.headers.Authorization = `Bearer ${data.data.access_token}`;
          return api.request(error.config);
          
        } catch (refreshError) {
          localStorage.clear();
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  }
);



export const submitConsultationRequest = async (formData) => {
  try {
    const response = await api.post('/consultation-request', formData);
    return {
      success: true,
      data: response.data,
      message: response.data.message || 'تم إرسال طلبك بنجاح!'
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'حدث خطأ أثناء إرسال الطلب',
      errors: error.response?.data?.errors || {}
    };
  }
};


export const contactInfo = {
  phone: '+20 10 07498390',
  address: 'الإسماعيلية، جمهورية مصر العربية',
  workingHours: {
    weekdays: 'السبت - الخميس: 8 صباحاً - 5 مساءً',
    weekend: 'الجمعة: مغلق'
  },
  social: {
    facebook: '#',
    instagram: '#'
  }
};


export const serviceTypes = [
  { value: '', label: 'اختر نوع الخدمة' },
  { value: 'مخازن التبريد والتجميد', label: 'مخازن التبريد والتجميد' },
  { value: 'أنفاق التجميد السريع', label: 'أنفاق التجميد السريع' },
  { value: 'أنظمة التكييف التجارية', label: 'أنظمة التكييف التجارية' },
  { value: 'عقود الصيانة', label: 'عقود الصيانة' },
  { value: 'استشارة هندسية', label: 'استشارة هندسية' },
  { value: 'أخرى', label: 'أخرى' }
];


export default api;