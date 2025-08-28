import {
  SiDiscord,
  SiTypescript,
  SiPython,
  SiJavascript,
  SiPhp,
  SiLua,
  SiNeovim,
  SiTailwindcss,
  SiGnubash,
  SiNestjs,
  SiC,
  SiKotlin,
  SiInstagram,
  SiExpress,
  SiCplusplus,
  SiJetpackcompose,
  SiSqlite,
  SiPostgresql,
  SiGtk,
  SiJetbrains,
  SiGnome,
  SiTelegram,
  SiMaterialdesign,
  SiNextdotjs,
  SiRust,
  SiFigma
} from 'react-icons/si'
import { FaCss3, FaGit, FaJava, FaLinux, FaReact } from 'react-icons/fa'
import { FunctionSquare, Mail, Syringe, Terminal } from 'lucide-react'

const email = 'budchirp@gmail.com'

const data = {
  name: 'Can Kolay',
  username: 'budchirp',
  description: 'Hello, World!',
  email,
  githubUsername: 'budchirp',
  projectSources: ['budchirp', 'OxygeNvim'],
  keywords: [
    'budchirp',
    'who is budchirp',
    'about budchirp',
    'budchirp projects',
    'contact budchirp',
    'can kolay',
    'who is can kolay',
    'about can kolay',
    'contact can kolay',
    'can kolay projects'
  ],
  siteUrl: process.env.APP_URL || 'http://localhost:3000',
  about: (
    <>
      <p>Cracked Full-Stack developer</p>
      <p>Amateur guitar player</p>
    </>
  ),
  technologies: {
    Languages: [
      {
        name: 'Kotlin',
        icon: <SiKotlin />
      },
      {
        name: 'Java',
        icon: <FaJava />
      },
      {
        name: 'Rust',
        icon: <SiRust />
      },
      {
        name: 'C',
        icon: <SiC />
      },
      {
        name: 'C++',
        icon: <SiCplusplus />
      },
      {
        name: 'Javascript',
        icon: <SiJavascript />
      },
      {
        name: 'Typescript',
        icon: <SiTypescript />
      },
      {
        name: 'Lua',
        icon: <SiLua />
      },
      {
        name: 'Python',
        icon: <SiPython />
      },
      {
        name: 'PHP',
        icon: <SiPhp />
      },
      {
        name: 'Bash',
        icon: <SiGnubash />
      }
    ],
    Tools: [
      {
        name: 'Linux',
        icon: <FaLinux />
      },
      {
        name: 'Git',
        icon: <FaGit />
      },
      {
        name: 'Neovim',
        icon: <SiNeovim />
      },
      {
        name: 'Termux',
        icon: <Terminal />
      },
      {
        name: 'Jetbrains IDEs',
        icon: <SiJetbrains />
      },
      {
        name: 'Gnome',
        icon: <SiGnome />
      },
      {
        name: 'Figma',
        icon: <SiFigma />
      }
    ],
    Database: [
      {
        name: 'SQLite',
        icon: <SiSqlite />
      },
      {
        name: 'Postgresql',
        icon: <SiPostgresql />
      }
    ]
  },
  stacks: {
    Frontend: [
      {
        name: 'React',
        icon: <FaReact />
      },
      {
        name: 'CSS',
        icon: <FaCss3 />
      },
      {
        name: 'TailwindCSS',
        icon: <SiTailwindcss />
      }
    ],
    Backend: [
      {
        name: 'Express.js',
        icon: <SiExpress />
      },
      {
        name: 'NestJS',
        icon: <SiNestjs />
      }
    ],
    'Full Stack': [
      {
        name: 'Next.js',
        icon: <SiNextdotjs />
      }
    ],
    'Mobile / Android': [
      {
        name: 'Jetpack Compose',
        icon: <SiJetpackcompose />
      },
      {
        name: 'Material 3',
        icon: <SiMaterialdesign />
      },
      {
        name: 'Hilt',
        icon: <Syringe />
      },
      {
        name: 'Clean Architecture',
        icon: <FunctionSquare />
      }
    ],
    Desktop: [
      {
        name: 'GTK4',
        icon: <SiGtk />
      },
      {
        name: 'LibAdwaita',
        icon: <SiGtk />
      }
    ],
    'Cross-Platform': [
      {
        name: 'Compose Multiplatform',
        icon: <SiJetpackcompose />
      }
    ]
  },
  journey: {
    2025: ['Started creating my own language called Graphite'],
    2024: ['Started learning Rust and C++'],
    2023: ['Started learning C, Java and Kotlin'],
    2022: ['Learned Typescript', 'Learned basic React', 'Learned TailwindCSS', 'Learned Lua'],
    2021: ['Learned Javascript', 'Learned PHP', 'Learned Python'],
    2020: ['Learned HTML, CSS']
  },
  contact: {
    Email: {
      link: `mailto:${email}`,
      icon: <Mail />
    },
    Telegram: {
      link: 'https://t.me/budchirp',
      icon: <SiTelegram />
    }
  }
}

export default data
