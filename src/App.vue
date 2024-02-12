<template>
  <div id="app">
    <div class="sidebar">
      <a href="#" class="logo-link">
        <img src="./assets/MariusLogo.png" alt="Logo" class="logo" />
      </a>
      <nav>
        <a href="#" v-scroll-to="'body'" class="sidebar-link">{{
          $t("message.About Me")
        }}</a>
        <a href="#" v-scroll-to="'.myprojects'" class="sidebar-link">{{
          $t("message.ProjectHighlights")
        }}</a>
        <a href="#" v-scroll-to="'.software'" class="sidebar-link">Software</a>
        <a href="#" v-scroll-to="'.Skills'" class="sidebar-link">Skills</a>
        <a href="#" v-scroll-to="'.Beispiele'" class="sidebar-link">{{
          $t("message.Examples")
        }}</a>
        <a href="#" v-scroll-to="'.letstalk'" class="sidebar-link"
          >Lets talk!</a
        >
        <div class="language-selector">
          <img
            src="./assets/uk.png"
            alt="English"
            title="English"
            @click="changeLanguage('en')"
          />
          <img
            src="./assets/ger.png"
            alt="German"
            title="German"
            @click="changeLanguage('de')"
          />
        </div>
      </nav>
    </div>
  </div>
  <div class="main-content">
    <h1 class="name">Marius Baumann</h1>
    <img src="./assets/ProfilPhoto.png" alt="Photo" class="Photo" />
    <p class="description">{{ $t("message.Allrounder") }}</p>
    <hr class="separator" />
    <p class="description">{{ $t("message.About Me") }}</p>
    <p class="about-me">
      {{ $t("message.AboutText") }}
    </p>
    <hr class="separator" />
    <p class="description myprojects">{{ $t("message.ProjectHighlights") }}</p>
    <div class="projects-grid">
      <div class="project">
        <h3 class="project-name">Nili's Apartment Cup V</h3>
        <a
          :href="'https://liquipedia.net/ageofempires/Nili%27s_Apartment_Cup/5'"
          target="_blank"
        >
          <img src="./assets/NacLogo.png" alt="NacLogo" class="projectlogo" />
        </a>
        <p class="project-role">CG Operator - 2024</p>
      </div>
      <div class="project">
        <h3 class="project-name">Red Bull League of Its Own</h3>
        <a
          :href="'https://www.redbull.com/at-de/events/red-bull-league-of-its-own-germany'"
          target="_blank"
        >
          <img src="./assets/LoioLogo.png" alt="LoioLogo" class="projectlogo" />
        </a>
        <p class="project-role">CG Operator - 2023</p>
      </div>
      <div class="project">
        <h3 class="project-name">Opening Night Live</h3>
        <a :href="'https://www.gamescom.de/de/explore/onl'" target="_blank">
          <img src="./assets/ONL.png" alt="ONLLogo" class="projectlogo" />
        </a>
        <p class="project-role">CG Operator - 2023</p>
      </div>
      <div class="project">
        <h3 class="project-name">Red Bull Gameball Royale</h3>
        <a
          :href="'https://www.redbull.com/de-de/events/red-bull-gameball-royale'"
          target="_blank"
        >
          <img
            src="./assets/Gameball.png"
            alt="GameballLogo"
            class="projectlogo"
          />
        </a>
        <p class="project-role">CG Operator - 2023</p>
      </div>
      <div class="project">
        <h3 class="project-name">IEM Katowice</h3>
        <a
          :href="'https://pro.eslgaming.com/tour/csgo/katowice-2023/'"
          target="_blank"
        >
          <img src="./assets/IEMKato.png" alt="IEMKato" class="projectlogo" />
        </a>
        <p class="project-role">CG Operator - 2023</p>
      </div>
      <div class="project">
        <h3 class="project-name">Red Bull Wololo: Legacy</h3>
        <a
          :href="'https://www.redbull.com/int-en/events/red-bull-wololo-legacy'"
          target="_blank"
        >
          <img
            src="./assets/WololoLegacy.png"
            alt="WololoLegacy"
            class="projectlogo"
          />
        </a>
        <p class="project-role">CG Operator - 2022</p>
      </div>
      <div class="project">
        <h3 class="project-name">HomeStory Cup 20</h3>
        <a
          :href="'https://liquipedia.net/starcraft2/HomeStory_Cup/20'"
          target="_blank"
        >
          <img src="./assets/hscxx.png" alt="hscxx" class="projectlogo" />
        </a>
        <p class="project-role">Producer - 2019</p>
      </div>
      <div class="project">
        <h3 class="project-name">TaKeTV 2014-15</h3>
        <a :href="'https://taketv.net/'" target="_blank">
          <img src="./assets/taketv.png" alt="taketv" class="projectlogo" />
        </a>
        <p class="project-role">Social Media Manager</p>
      </div>
    </div>
    <p class="description">{{ $t("message.manymore") }}</p>
    <hr class="separator" />
    <p class="description software">Software</p>
    <p class="about-me">
      {{ $t("message.SoftwareText") }}
    </p>
    <div class="grid-container">
      <div class="grid">
        <softwareComponent
          :image="require('./assets/Xpression.png')"
          number="95"
          text="Xpression"
        />
        <softwareComponent
          :image="require('./assets/Photoshop.png')"
          number="91"
          text="Photoshop"
        />
        <softwareComponent
          :image="require('./assets/Premiere.png')"
          number="91"
          text="Premiere"
        />
        <softwareComponent
          :image="require('./assets/AfterEffects.png')"
          number="85"
          text="After Effects"
        />
        <softwareComponent
          :image="require('./assets/Illustrator.png')"
          number="65"
          text="Illustrator"
        />
        <softwareComponent
          :image="require('./assets/Dashboard.png')"
          number="84"
          text="Dashboard"
        />
        <softwareComponent
          :image="require('./assets/Casparcg.png')"
          number="80"
          text="CasparCG"
        />
        <softwareComponent
          :image="require('./assets/Chrworks.png')"
          number="70"
          text="Chrworks"
        />
        <softwareComponent
          :image="require('./assets/Godot.png')"
          number="82"
          text="Godot"
        />
        <softwareComponent
          :image="require('./assets/Unreal.png')"
          number="45"
          text="Unreal Engine"
        />
        <softwareComponent
          :image="require('./assets/OBS.png')"
          number="90"
          text="OBS"
        />
        <softwareComponent
          :image="require('./assets/Blackmagic.png')"
          number="85"
          text="Blackmagic"
        />
        <softwareComponent
          :image="require('./assets/Javascript.png')"
          number="55"
          text="Javascript"
        />
        <softwareComponent
          :image="require('./assets/Python.png')"
          number="65"
          text="Python"
        />
        <softwareComponent
          :image="require('./assets/Blender3d.png')"
          number="40"
          text="Blender3D"
        />
        <softwareComponent
          :image="require('./assets/VoiceMeter.png')"
          number="75"
          text="VoiceMeter"
        />
        <softwareComponent
          :image="require('./assets/Ableton.png')"
          number="70"
          text="Ableton"
        />
        <softwareComponent
          :image="require('./assets/Firebase.png')"
          number="55"
          text="Firebase RTDB"
        />
        <softwareComponent
          :image="require('./assets/VueJS.png')"
          number="60"
          text="VueJS"
        />
      </div>
    </div>
    <hr class="separator" />
    <p class="description Skills">Skills</p>
    <div class="skillscontainer">
      <div class="graphic">
        <h2 class="headline">Personal</h2>
        <img src="./assets/AppSkills.png" alt="AppSkills" class="skillgfx" />
      </div>
      <div class="graphic">
        <h2 class="headline">Workplace</h2>
        <img src="./assets/Workplace.png" alt="Workplace" class="skillgfx" />
      </div>
    </div>
    <hr class="separator" />
    <p class="description Beispiele">{{ $t("message.Examples") }}</p>
    <p class="description">Aversion's Race to World First</p>
    <p class="about-me">
      {{ $t("message.AversionText") }}
    </p>
    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/R5pL-YrBhn0"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <p class="description">NAC 5 Twitch Extension</p>
    <p class="about-me">
      {{ $t("message.ExtensionText") }}
    </p>
    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/RPRd_y2tbMo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <p class="description">Gamedev - Chat Survivors</p>
    <p class="about-me">
      {{ $t("message.GameText") }}
    </p>
    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/j9zzko-ntaM"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <hr class="separator" />
    <p class="description letstalk">Lets talk!</p>
    <p class="about-me">
      {{ $t("message.LetsTalkText") }}
    </p>
    <div class="link-container">
      <a href="mailto:mariusbartbaumann@gmail.com"
        >MariusBartBaumann@gmail.com</a
      >
      <a href="https://discord.gg/zm5xvqgz">Discord</a>
    </div>
  </div>
</template>

<script>
import softwareComponent from ".//components/softwareComponent.vue";
export default {
  name: "App",
  components: {
    softwareComponent,
  },
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap");
body {
  margin: 0;
  padding: 0;
  background-color: #151515;
  color: #ffffff;
  font-family: "Orbitron", sans-serif;
}

#app {
  display: flex;
}

.sidebar-link {
  position: relative;
  display: block;
  margin-bottom: 20px;
  text-decoration: none;
}

.sidebar-link:hover {
  background: linear-gradient(to right, transparent, #c0c0c0, transparent);
}

.sidebar-link:visited {
  color: inherit; /* or any other color you prefer */
}

.sidebar-link:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -10px; /* adjust this value as needed */
  height: 1px;
  background: linear-gradient(to right, transparent, #c0c0c0, transparent);
}

nav router-link {
  position: relative;
  display: block;
  margin-bottom: 20px;
}

nav router-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -10px; /* adjust this value as needed */
  height: 1px;
  background: linear-gradient(to right, transparent, #c0c0c0, transparent);
}

.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 200px;
  height: 100%;
  background-color: #050505;
  border-right: 2px solid #c0c0c0;
  box-shadow: 0 0 10px #c0c0c0;
}

.logo {
  margin-bottom: 30px;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

router-link {
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
}

router-link:hover {
  color: #c0c0c0;
  text-shadow: 0 0 10px #c0c0c0, 0 0 20px #c0c0c0, 0 0 30px #c0c0c0,
    0 0 40px #c0c0c0;
}

.logo {
  width: 50%;
  height: auto;
}

.logo-link {
  display: flex;
  justify-content: center;
}

.Photo {
  width: 15%;
  height: auto;
}

.main-content {
  margin-left: 220px;
  text-align: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    #151515,
    #000
  ); /* adjust colors as needed */
}

.name {
  font-size: 3em; /* adjust as needed */
  font-weight: bold;
}

.description {
  font-size: 1.5em; /* adjust as needed */
  font-weight: 500; /* medium weight */
}

.separator {
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, #c0c0c0, transparent);
  margin: 20px 0; /* adjust as needed */
}

.about-me {
  font-size: 1em; /* adjust as needed */
  font-weight: 300; /* thin weight */
  width: 70%; /* adjust as needed */
  margin: 0 auto; /* centers the paragraph */
  font-family: "Roboto", sans-serif;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; /* adjust as needed */
  width: 80%; /* adjust as needed */
  margin: 0 auto; /* centers the grid */
}

.project-name {
  font-size: 1.2em; /* adjust as needed */
  font-weight: 500; /* medium weight */
}

.project-role {
  font-size: 0.8em; /* adjust as needed */
  font-weight: 300; /* thin weight */
}

.project {
  margin-bottom: 50px;
}

.grid-container {
  display: flex;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 50px;
  width: 80%; /* adjust as needed */
}

.skillscontainer {
  display: flex;
  justify-content: space-evenly;
}

.graphic {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%; /* adjust as needed */
}

.skillgfx {
  width: 100%;
}

.headline {
  text-align: center;
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* adjust as needed */
}

.video-container iframe {
  width: 60%; /* adjust as needed */
  height: 70%; /* adjust as needed */
}

.link-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px; /* adjust as needed */
  padding: 50px; /* adjust as needed */
}

.language-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px; /* adjust as needed */
}
.language-selector img {
  width: 30px; /* adjust as needed */
  height: 30px; /* adjust as needed */
  object-fit: contain;
  cursor: pointer;
}
</style>
