export const dictionaries = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
      tech: "Teknologi",
      contact: "Kontak",
    },
    hero: {
      greeting: "Hi, I'm Kevin",
      role: "Developer.",
      desc: "Membangun antarmuka web yang cepat, estetik, dan fungsional. Fokus pada pengalaman pengguna yang intuitif dan kode yang bersih.",
      btnProject: "Lihat Karya",
      btnResume: "Lihat Resume",
      locationLabel: "Lokasi",
      locationValue: "Tangerang, ID",
      statusLabel: "Status",
      statusValue: "Tersedia (Available)",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      tech: "Tech",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Kevin",
      role: "Developer.",
      desc: "Building fast, aesthetic, and functional web interfaces. Focused on intuitive user experiences and clean code.",
      btnProject: "View Projects",
      btnResume: "View Resume",
      locationLabel: "Location",
      locationValue: "Tangerang, ID",
      statusLabel: "Status",
      statusValue: "Available to work",
    },
  },
  jp: {
    nav: {
      home: "ホーム", // Home
      about: "私について", // About me
      experience: "経歴", // Experience
      projects: "プロジェクト", // Projects
      tech: "技術", // Tech
      contact: "連絡先", // Contact
    },
    hero: {
      greeting: "こんにちは、ケビンです", // Konnichiwa, Kebin desu
      role: "開発者.", // Kaihatsu-sha (Developer)
      desc: "高速で美しく、機能的なWebインターフェースを構築します。直感的なユーザーエクスペリエンスとクリーンなコードに焦点を当てています。",
      btnProject: "プロジェクトを見る",
      btnResume: "履歴書を見る",
      locationLabel: "拠点",
      locationValue: "インドネシア、タンゲラン",
      statusLabel: "ステータス",
      statusValue: "お仕事募集中", // O-shigoto boshū-chū (Looking for work/Available)
    },
  },
};

// TypeScript akan membaca struktur otomatis dari objek 'id' di atas
export type Dictionary = (typeof dictionaries)["id"];
