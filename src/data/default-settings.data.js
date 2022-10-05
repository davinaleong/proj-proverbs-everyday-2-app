import dayjs from "dayjs"

const todayMonth = dayjs().format("D")

const defaultSettings = {
    theme: "",
    preferredTranslation: "kjv",
    bookSlug: "prov",
    chapterSlug: `chapter-${todayMonth}`,
    textSize: "",
}

export default defaultSettings