export default function changeTheme(theme, setContext) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem("theme", theme)
    // We are doing all the things below because we want these three properties to be globally available as variable, because graph doesn't understand css colors and it needs variable defined colors.
    const rootStyles = getComputedStyle(document.documentElement);
    const themeColor = rootStyles.getPropertyValue("--theme").trim();
    const bgColor = rootStyles.getPropertyValue("--secondary").trim();
    const textColor = rootStyles.getPropertyValue("--text").trim();
    setContext({themeColor:  themeColor, bgColor: bgColor, textColor: textColor});
}