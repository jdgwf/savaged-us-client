export const CONFIGApiPrefix = "https://savaged.us/_api";
export const CONFIGAdminApiPrefix = "https://savaged.us/_api/admin";
export const CONFIGSharePrefix = "https://savaged.us/s";

export const CONFIGDataDirName = "data";
export const CONFIGDataUploadDirectory = CONFIGDataDirName + "/uploads/";
export const CONFIGShareDataGetURLPrefix = "/shares";
export const CONFIGDataGetUrlPrefix = "/data-images";

export const CONFIGSiteTitle = "Savaged";

export const CONFIGDebugHost = "http://localhost:5000";
export const CONFIGLiveHost = "https://savaged.us";
// export const CONFIGShortShareSite = "https://v2.savaged.us/s/";
export const CONFIGShortShareSite = "https://svgd.us/";

export const CONFIGAllowedImageTypes: string[] = [
    "image/jpeg",
    "image/jpg",
    "image/png",
]

export const CONFIGActiveUserDisplayMinutes = 15;
export const CONFIGImageHeightMax = 1000;
export const CONFIGImageWidthMax = 1000;

export const CONFIGBaseFolderName = "Base Folder";

export const CONFIGBookDBFields = ["id", "short_name", "name", "publisher", "published", "core", "primary", "image_upload", "setting_rules", "knowledge_list", "skill_list", "add_skills", "del_skills", "ab_list", "core_skills", "has_charisma", "uses_xp", "starting_skill_points", "starting_attribute_points"];

export const CONFIGEmailSubjectPrefix = "[Savaged.us] ";
export const CONFIGEmailFromName = "Savaged.us Website";
export const CONFIGEmailFromEmail = "nobody@savaged.us";

export const CONFIGDefaultImageRegistered = "/images/pawn.jpg";
export const CONFIGDefaultImageWildCard = "/images/knight.jpg";
export const CONFIGDefaultImageDeveloper = "/images/bishop.jpg";
export const CONFIGDefaultImageGM = "/images/king.jpg";

export const CONFIGDefaultWildcardBestiaryImage = "/images/sw_ace.png";

export const CONFIGRecaptchaFrontEndSiteKey = "6LeGuIUUAAAAAADpanRTzQCWzsB_6-dGef4Mp1wA";
// Secret key is in .env

export const CONFIGRecaptchaEnabled = true;
export const CONFIGRecaptchaType = "image";

export const CONFIGWildCardSubscriptionPriceUSD = 30;
export const CONFIGNumSavesRegistered = 10;
export const CONFIGNumSavesWildCard = 150;
export const CONFIGNumSavesAce = 250;
export const CONFIGNumSavesDeveloper = 250;
export const CONFIGNumSavesAdmin = 250;

export const CONFIGResetLinkTimeoutDays = 3;

export const CONFIGMYSQLTimeZoneOffset = "UTC"

export const CONFIGNumberDaysGrace = 5;

export const CONFIGURLWhitelist = [
    "https://savaged.us",
    "https://v2.savaged.us",
    "https://d.pr/",
    "https://twitter.com",
    "https://i.imgur.com/",
    "https://gyazo.com/",
    "https://imgur.com/",
    "https://snipboard.io/",
];