// ===============================
// THEME TOGGLE (STABLE & CLEAN)
// ===============================
function initTheme() {
  const html = document.documentElement
  const themeIcon = document.getElementById("theme-icon")

  function applyTheme(theme) {
    if (theme === "dark") {
      html.classList.add("dark")
      themeIcon?.classList.remove("fa-moon")
      themeIcon?.classList.add("fa-sun")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      themeIcon?.classList.remove("fa-sun")
      themeIcon?.classList.add("fa-moon")
      localStorage.setItem("theme", "light")
    }
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("theme")
  applyTheme(savedTheme === "dark" ? "dark" : "light")

  // Button click toggle
  window.toggleTheme = () => {
    const isDark = html.classList.contains("dark")
    applyTheme(isDark ? "light" : "dark")
  }
}

// Safe init
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTheme)
} else {
  initTheme()
}

// ===============================
// MOBILE MENU
// ===============================
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.getElementById("menu-icon")

  if (!mobileMenu || !menuIcon) return

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden")
    menuIcon.className = "fas fa-times"
  } else {
    mobileMenu.classList.add("hidden")
    menuIcon.className = "fas fa-bars"
  }
}

// ===============================
// PAGE UTILITIES
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const loadingOverlay = document.getElementById("loadingOverlay")

  // Hide loading
  if (loadingOverlay) {
    setTimeout(() => {
      loadingOverlay.classList.add("hidden")
    }, 800)
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"))
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  })

  // Scroll animation observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-animate")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
  )

  document.querySelectorAll(".bg-white\\/95, .bg-gray-100").forEach((el) => observer.observe(el))
})

// ===============================
// INIT ON PAGE LOAD
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  initTheme() // your existing theme function
})
