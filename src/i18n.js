import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          events: "Events",
          about: "About",
          contact: "Contact",

          badge: "✨ New events added daily",
          heroTitle1: "Discover",
          heroTitle2: "Amazing",
          heroTitle3: "Events",
          heroSubtext:
            "Join thousands of students and young professionals at concerts, workshops, talks, and community gatherings",
          exploreBtn: "Explore Events",

          happyUsers: "Happy Users",
          eventsHosted: "Events Hosted",
          avgRating: "Average Rating",

          upcomingEvents: "Upcoming Events",
          bookNow: "Book Now",

          eventCategories: "Event Categories",
          music: "Music",
          workshops: "Workshops",
          talks: "Talks",
          theatre: "Theatre",
          community: "Community",

          whyTitle: "Why Choose Our Platform?",
          whySubtext:
            "We make it easy to discover and attend the best events in your city",
          easyBooking: "Easy Booking",
          easyBookingDesc: "Book your tickets in just a few clicks",
          trustedEvents: "Trusted Events",
          trustedEventsDesc: "All events are verified and secure",
          instantConfirmation: "Instant Confirmation",
          instantConfirmationDesc: "Get your tickets immediately via email",
          bestPrices: "Best Prices",
          bestPricesDesc: "Exclusive deals and student discounts",

          bookTickets: "Book Your Tickets",
          fullName: "Full Name",
          emailAddress: "Email Address",
          numberOfTickets: "Number of Tickets",
          selectEvent: "Select Event",
          completeBooking: "Complete Booking",

          stayUpdated: "Stay Updated",
          newsletterSubtext: "Get the latest events delivered to your inbox",
          enterEmail: "Enter your email",
          subscribe: "Subscribe",
          privacy: "We respect your privacy. Unsubscribe at any time."
        }
      },
      ar: {
        translation: {
          home: "الرئيسية",
          events: "الفعاليات",
          about: "من نحن",
          contact: "تواصل معنا",

          badge: "✨ يتم إضافة فعاليات جديدة يومياً",
          heroTitle1: "اكتشف",
          heroTitle2: "فعاليات رائعة",
          heroTitle3: "",
          heroSubtext:
            "انضم إلى آلاف الطلاب والمهنيين الشباب في الحفلات والورش والمحادثات والتجمعات",
          exploreBtn: "استكشف الفعاليات",

          happyUsers: "مستخدم سعيد",
          eventsHosted: "فعالية مستضافة",
          avgRating: "متوسط التقييم",

          upcomingEvents: "الفعاليات القادمة",
          bookNow: "احجز الآن",

          eventCategories: "فئات الفعاليات",
          music: "موسيقى",
          workshops: "ورش عمل",
          talks: "محادثات",
          theatre: "مسرح",
          community: "مجتمع",

          whyTitle: "لماذا تختار منصتنا؟",
          whySubtext:
            "نجعل من السهل اكتشاف وحضور أفضل الفعاليات في مدينتك",
          easyBooking: "حجز سهل",
          easyBookingDesc: "احجز تذاكرك بنقرات قليلة",
          trustedEvents: "فعاليات موثوقة",
          trustedEventsDesc: "جميع الفعاليات موثقة وآمنة",
          instantConfirmation: "تأكيد فوري",
          instantConfirmationDesc: "احصل على تذاكرك فوراً عبر البريد الإلكتروني",
          bestPrices: "أفضل الأسعار",
          bestPricesDesc: "عروض حصرية وخصومات للطلاب",

          bookTickets: "احجز تذاكرك",
          fullName: "الاسم الكامل",
          emailAddress: "البريد الإلكتروني",
          numberOfTickets: "عدد التذاكر",
          selectEvent: "اختر فعالية",
          completeBooking: "إتمام الحجز",

          stayUpdated: "ابق على اطلاع",
          newsletterSubtext: "احصل على أحدث الفعاليات في بريدك الإلكتروني",
          enterEmail: "أدخل بريدك الإلكتروني",
          subscribe: "اشترك",
          privacy: "نحن نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت."
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;