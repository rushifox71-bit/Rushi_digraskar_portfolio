
// Rushi Digraskar Portfolio - Full Script
const designs = [
  // Marathi Designs
  {
    id: "marathi-01",
    src: "assets/images/marathi-designs/shivaji-maharaj-poster.jpg",
    category: "marathi-designs",
    tag_mr: "मराठी डिझाईन",
    tag_en: "Marathi Design",
    title_mr: "शिवाजी महाराज पोस्टर",
    title_en: "Shivaji Maharaj Poster"
  },
  {
    id: "marathi-02",
    src: "assets/images/marathi-designs/shahi-lagna-patrika.jpg",
    category: "marathi-designs",
    tag_mr: "लग्न पत्रिका",
    tag_en: "Wedding Invitation",
    title_mr: "शाही लग्न पत्रिका",
    title_en: "Shahi Lagna Patrika"
  },
  // Festival Designs
  {
    id: "festival-01",
    src: "assets/images/festival-designs/ganesh-chaturthi.jpg",
    category: "festival-designs",
    tag_mr: "सण डिझाईन",
    tag_en: "Festival Design",
    title_mr: "गणेश चतुर्थी पोस्टर",
    title_en: "Ganesh Chaturthi Poster"
  },
  // Political Posters
  {
    id: "political-01",
    src: "assets/images/political-posters/election-poster-1.jpg",
    category: "political-posters",
    tag_mr: "राजकीय पोस्टर",
    tag_en: "Political Poster",
    title_mr: "निवडणूक प्रचार पोस्टर",
    title_en: "Election Campaign Poster"
  },
  // Wedding Designs
  {
    id: "wedding-01",
    src: "assets/images/wedding-designs/wedding-card-1.jpg",
    category: "wedding-designs",
    tag_mr: "लग्न डिझाईन",
    tag_en: "Wedding Design",
    title_mr: "लग्न पत्रिका डिझाईन",
    title_en: "Wedding Card Design"
  },
  // Social Media
  {
    id: "social-01",
    src: "assets/images/social-media/insta-post-1.jpg",
    category: "social-media",
    tag_mr: "सोशल मीडिया",
    tag_en: "Social Media",
    title_mr: "इंस्टाग्राम पोस्ट",
    title_en: "Instagram Post Design"
  }
];

const videos = [
  {
    id: "vid-01",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tag_mr: "व्हिडिओ एडिटिंग",
    tag_en: "Video Editing",
    title_mr: "लग्न हायलाइट व्हिडिओ",
    title_en: "Wedding Highlight Video",
    desc_mr: "सिनेमॅटिक एडिटिंगसह बनवलेला व्हिडिओ",
    desc_en: "Cinematic wedding highlight editing"
  },
  {
    id: "vid-04",
    youtubeUrl: "https://www.youtube.com/watch?v=4zNfkb6fWRM",
    tag_mr: "शॉर्ट फिल्म",
    tag_en: "Short Film",
    title_mr: "माझी नवीन मराठी शॉर्ट फिल्म",
    title_en: "My New Marathi Short Film",
    desc_mr: "कलर ग्रेडिंग आणि साऊंड डिझायनिंगसह एडिट केलेले.",
    desc_en: "Edited with cinematic color grading and sound design."
  }
];

// Function to get YouTube Thumbnail
function getYouTubeThumbnail(url) {
  try {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  } catch {
    return "";
  }
}

// Render Designs
function renderDesigns(filter = "all") {
  const container = document.getElementById("design-gallery") || document.getElementById("gallery") || document.querySelector(".gallery");
  if (!container) return;
  
  container.innerHTML = "";
  const filtered = filter === "all" ? designs : designs.filter(d => d.category === filter);
  
  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "design-card";
    div.innerHTML = `
      <img src="${item.src}" alt="${item.title_en}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x500?text=Image+Not+Found'">
      <div class="design-info">
        <span class="tag">${item.tag_mr} / ${item.tag_en}</span>
        <h3>${item.title_mr}</h3>
        <p>${item.title_en}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

// Render Videos
function renderVideos() {
  const container = document.getElementById("video-gallery") || document.querySelector(".video-gallery");
  if (!container) return;
  
  container.innerHTML = "";
  videos.forEach(video => {
    const thumb = getYouTubeThumbnail(video.youtubeUrl);
    const div = document.createElement("div");
    div.className = "video-card";
    div.innerHTML = `
      <a href="${video.youtubeUrl}" target="_blank">
        <img src="${thumb}" alt="${video.title_en}" loading="lazy">
        <div class="play-icon">▶</div>
      </a>
      <div class="video-info">
        <span class="tag">${video.tag_mr} / ${video.tag_en}</span>
        <h3>${video.title_mr}</h3>
        <p>${video.title_en}</p>
        <small>${video.desc_mr}</small>
      </div>
    `;
    container.appendChild(div);
  });
}

// Init on load
document.addEventListener("DOMContentLoaded", () => {
  renderDesigns();
  renderVideos();
  
  // Filter buttons if exist
  document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      renderDesigns(filter);
    });
  });
});
