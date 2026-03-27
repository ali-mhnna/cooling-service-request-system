import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// إرسال طلب استشارة (عام)
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

// ===== Admin Functions =====
const ADMIN_SECRET = 'safwa-admin-2024-secret'; // نفس الرابط السري

// جلب كل الطلبات (Admin)
export const getRequests = async () => {
  try {
    const response = await api.get(`/${ADMIN_SECRET}/requests`);
    return {
      success: true,
      data: response.data.data,
      total: response.data.total
    };
  } catch (error) {
    return {
      success: false,
      message: 'حدث خطأ في جلب الطلبات'
    };
  }
};

// حذف طلب (Admin)
export const deleteRequest = async (id) => {
  try {
    const response = await api.delete(`/${ADMIN_SECRET}/requests/${id}`);
    return {
      success: true,
      message: response.data.message
    };
  } catch (error) {
    return {
      success: false,
      message: 'حدث خطأ في حذف الطلب'
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