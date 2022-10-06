import dayjs from "dayjs"

const todayMonth = dayjs().format("D")

const DefaultSettingsData = {
    theme: "",
    preferredTranslation: "kjv",
    bookSlug: "prov",
    chapterSlug: `chapter-${todayMonth}`,
    textSize: "",
    allowCache: false,
}

export default DefaultSettingsData