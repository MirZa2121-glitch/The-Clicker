'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const translations = {
    en: {
        home: "Lighter home",
        navigation: "Main navigation",
        play: "PLAY",
        back: "Back",
        score: "Score",
        reset: "Reset",
        resetMessage: "Score reset!",
        tapButton: "Tap to increase score. Current score:",
        doubled: "Doubled on x2!!!",
        tripled: "Tripled on x3!!!",
        settings: "Settings",
        information: "Information",
        language: "Language",
        close: "Close",
        aboutTitle: "Project by Mirza",
        brandSuffix: "Glitch",
        version: "Version V2.0.0 APATCH",
        hello: "Hello!",
        aboutText: "This is the second version, titled APATCH. A lot has been added to make it different from the first version. The old issues have been fixed and new visual elements have been added. Another big update is in the works, with a simpler interface for the gaming platform. Follow my social media for updates! :3",
        settingsMessage: "Choose the language for the website.",
    },
    ru: {
        home: "На главную Lighter",
        navigation: "Главное меню",
        play: "ИГРАТЬ",
        back: "Назад",
        score: "Счёт",
        reset: "Сбросить",
        resetMessage: "Счёт сброшен!",
        tapButton: "Нажмите, чтобы увеличить счёт. Текущий счёт:",
        doubled: "Удвоение x2!!!",
        tripled: "Утроение x3!!!",
        settings: "Настройки",
        information: "Информация",
        language: "Язык",
        close: "Закрыть",
        aboutTitle: "Проект Mirza",
        brandSuffix: "Glitch",
        version: "Версия V2.0.0 APATCH",
        hello: "Привет!",
        aboutText: "Это вторая версия проекта под названием APATCH. В неё добавлено много нового. Исправлены старые недочёты и добавлены новые визуальные элементы. В работе большое обновление с более простым интерфейсом игровой платформы. Следите за новостями в моих соцсетях! :3",
        settingsMessage: "Выберите язык сайта.",
    },
    az: {
        home: "Lighter ana səhifə",
        navigation: "Əsas menyu",
        play: "OYNA",
        back: "Geri",
        score: "Xal",
        reset: "Sıfırla",
        resetMessage: "Xal sıfırlandı!",
        tapButton: "Xalı artırmaq üçün toxunun. Cari xal:",
        doubled: "2 dəfə artırıldı!!!",
        tripled: "3 dəfə artırıldı!!!",
        settings: "Parametrlər",
        information: "Məlumat",
        language: "Dil",
        close: "Bağla",
        aboutTitle: "Mirza layihəsi",
        brandSuffix: "Glitch",
        version: "Versiya V2.0.0 APATCH",
        hello: "Salam!",
        aboutText: "Bu, APATCH adlı ikinci versiyadır. Onu əvvəlki versiyadan fərqləndirmək üçün çoxlu yenilik əlavə edilib. Köhnə problemlər düzəldilib və yeni vizual elementlər əlavə olunub. Oyun platforması üçün daha sadə interfeysə malik böyük bir yeniləmə hazırlanır. Yeniliklər üçün sosial şəbəkələrimi izləyin! :3",
        settingsMessage: "Veb-sayt üçün dili seçin.",
    },
};

type Language = keyof typeof translations;

const LanguageContext = createContext<{
    language: Language;
    setLanguage: (language: Language) => void;
    text: (typeof translations)[Language];
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, text: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return languageContext;
}