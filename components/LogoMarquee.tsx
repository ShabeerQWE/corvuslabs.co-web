import React from 'react';
import { Marquee } from './ui/marquee';

const LogoMarquee: React.FC = () => {
  // Logo components
  const Logos = {
    corvus: () => (
      <img
        src="/Logov2.svg"
        alt="Corvus Labs Logo"
        className="h-[32px] w-auto"
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
      />
    ),
    tailwindcss: () => (
      <svg
        className="h-[28px] sm:w-auto w-[140px]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 262 33"
      >
        <path
          className="fill-cyan-500"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
        />
        <path
          className="fill-gray-800"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M80.996 13.652H76.284V22.772C76.284 25.204 77.88 25.166 80.996 25.014V28.7C74.688 29.46 72.18 27.712 72.18 22.772V13.652H68.684V9.69996H72.18V4.59596L76.284 3.37996V9.69996H80.996V13.652ZM98.958 9.69996H103.062V28.7H98.958V25.964C97.514 27.978 95.272 29.194 92.308 29.194C87.14 29.194 82.846 24.824 82.846 19.2C82.846 13.538 87.14 9.20596 92.308 9.20596C95.272 9.20596 97.514 10.422 98.958 12.398V9.69996ZM92.954 25.28C96.374 25.28 98.958 22.734 98.958 19.2C98.958 15.666 96.374 13.12 92.954 13.12C89.534 13.12 86.95 15.666 86.95 19.2C86.95 22.734 89.534 25.28 92.954 25.28ZM109.902 6.84996C108.458 6.84996 107.28 5.63396 107.28 4.22796C107.281 3.53297 107.558 2.86682 108.049 2.37539C108.541 1.88395 109.207 1.60728 109.902 1.60596C110.597 1.60728 111.263 1.88395 111.755 2.37539C112.246 2.86682 112.523 3.53297 112.524 4.22796C112.524 5.63396 111.346 6.84996 109.902 6.84996ZM107.85 28.7V9.69996H111.954V28.7H107.85ZM116.704 28.7V0.959961H120.808V28.7H116.704ZM147.446 9.69996H151.778L145.812 28.7H141.784L137.832 15.894L133.842 28.7H129.814L123.848 9.69996H128.18L131.866 22.81L135.856 9.69996H139.77L143.722 22.81L147.446 9.69996ZM156.87 6.84996C155.426 6.84996 154.248 5.63396 154.248 4.22796C154.249 3.53297 154.526 2.86682 155.017 2.37539C155.509 1.88395 156.175 1.60728 156.87 1.60596C157.565 1.60728 158.231 1.88395 158.723 2.37539C159.214 2.86682 159.491 3.53297 159.492 4.22796C159.492 5.63396 158.314 6.84996 156.87 6.84996ZM154.818 28.7V9.69996H158.922V28.7H154.818ZM173.666 9.20596C177.922 9.20596 180.962 12.094 180.962 17.034V28.7H176.858V17.452C176.858 14.564 175.186 13.044 172.602 13.044C169.904 13.044 167.776 14.64 167.776 18.516V28.7H163.672V9.69996H167.776V12.132C169.03 10.156 171.082 9.20596 173.666 9.20596ZM200.418 2.09996H204.522V28.7H200.418V25.964C198.974 27.978 196.732 29.194 193.768 29.194C188.6 29.194 184.306 24.824 184.306 19.2C184.306 13.538 188.6 9.20596 193.768 9.20596C196.732 9.20596 198.974 10.422 200.418 12.398V2.09996ZM194.414 25.28C197.834 25.28 200.418 22.734 200.418 19.2C200.418 15.666 197.834 13.12 194.414 13.12C190.994 13.12 188.41 15.666 188.41 19.2C188.41 22.734 190.994 25.28 194.414 25.28ZM218.278 29.194C212.54 29.194 208.246 24.824 208.246 19.2C208.246 13.538 212.54 9.20596 218.278 9.20596C222.002 9.20596 225.232 11.144 226.752 14.108L223.218 16.16C222.382 14.374 220.52 13.234 218.24 13.234C214.896 13.234 212.35 15.78 212.35 19.2C212.35 22.62 214.896 25.166 218.24 25.166C220.52 25.166 222.382 23.988 223.294 22.24L226.828 24.254C225.232 27.256 222.002 29.194 218.278 29.194ZM233.592 14.944C233.592 18.402 243.814 16.312 243.814 23.342C243.814 27.142 240.508 29.194 236.404 29.194C232.604 29.194 229.868 27.484 228.652 24.748L232.186 22.696C232.794 24.406 234.314 25.432 236.404 25.432C238.228 25.432 239.634 24.824 239.634 23.304C239.634 19.922 229.412 21.822 229.412 15.02C229.412 11.448 232.49 9.20596 236.366 9.20596C239.482 9.20596 242.066 10.65 243.396 13.158L239.938 15.096C239.254 13.614 237.924 12.93 236.366 12.93C234.884 12.93 233.592 13.576 233.592 14.944ZM251.11 14.944C251.11 18.402 261.332 16.312 261.332 23.342C261.332 27.142 258.026 29.194 253.922 29.194C250.122 29.194 247.386 27.484 246.17 24.748L249.704 22.696C250.312 24.406 251.832 25.432 253.922 25.432C255.746 25.432 257.152 24.824 257.152 23.304C257.152 19.922 246.93 21.822 246.93 15.02C246.93 11.448 250.008 9.20596 253.884 9.20596C257 9.20596 259.584 10.65 260.914 13.158L257.456 15.096C256.772 13.614 255.442 12.93 253.884 12.93C252.402 12.93 251.11 13.576 251.11 14.944Z"
        />
      </svg>
    ),
    nextjs: () => (
      <svg
        className="h-[20px] fill-gray-800"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 394 79"
      >
        <path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"></path>
        <path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"></path>
        <path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"></path>
        <path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"></path>
        <path
          clipRule="evenodd"
          d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
          fillRule="evenodd"
        ></path>
        <path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"></path>
        <path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"></path>
        <path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"></path>
      </svg>
    ),
    vscode: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <svg className="h-[30px]" viewBox="0 0 24 24" fill="none">
          <path d="M17.5 0L6.5 2.5L0 5.5L6.5 12L0 18.5L6.5 21.5L17.5 24L24 22L17.5 12L24 2L17.5 0Z" fill="#007ACC"/>
        </svg>
        <span className="text-gray-800 font-medium">VS Code</span>
      </div>
    ),
    resend: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">R</span>
        </div>
        <span className="text-gray-800 font-medium">Resend</span>
      </div>
    ),
    cloudflare: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <svg className="h-[30px]" viewBox="0 0 24 24" fill="#F38020">
          <path d="M21.049 9.826c-.264-.02-.528-.02-.792 0-.242-2.437-2.37-4.317-4.843-4.317-1.171 0-2.234.41-3.058 1.1-.627-.627-1.496-1.013-2.462-1.013-1.914 0-3.467 1.553-3.467 3.467 0 .176.013.35.04.52C5.516 9.887 4.95 10.71 4.95 11.667c0 1.177.953 2.13 2.13 2.13h13.34c1.59 0 2.88-1.29 2.88-2.88 0-1.495-1.14-2.722-2.601-2.862l-.65-.229z"/>
        </svg>
        <span className="text-gray-800 font-medium">Cloudflare</span>
      </div>
    ),
    porkbun: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center relative shadow-lg">
          {/* Pig face with proper proportions */}
          <div className="relative w-8 h-8">
            {/* Main pig head */}
            <div className="w-6 h-6 bg-white rounded-full absolute top-1 left-1/2 transform -translate-x-1/2">
              {/* Pig ears */}
              <div className="w-2 h-2 bg-white rounded-full absolute -top-0.5 left-0.5 transform rotate-12"></div>
              <div className="w-2 h-2 bg-white rounded-full absolute -top-0.5 right-0.5 transform -rotate-12"></div>
              
              {/* Eyes */}
              <div className="flex space-x-2 justify-center pt-2">
                <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
                <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
              </div>
              
              {/* Snout */}
              <div className="w-3 h-2 bg-pink-200 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-0.5 justify-center pt-0.5">
                  <div className="w-0.5 h-0.5 bg-pink-500 rounded-full"></div>
                  <div className="w-0.5 h-0.5 bg-pink-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Curly tail symbol */}
              <div className="absolute -bottom-1 -right-1">
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6C2 4 4 2 6 2C8 2 10 4 10 6C10 7 9 8 8 8C7 8 6 7 6 6" stroke="#EC4899" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <span className="text-gray-800 font-medium">Porkbun</span>
      </div>
    ),
    // Existing companies from Clients component
    apple: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <i className="fab fa-apple text-3xl text-gray-800"></i>
        <span className="text-gray-800 font-medium">Apple</span>
      </div>
    ),
    microsoft: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <i className="fab fa-microsoft text-3xl text-gray-800"></i>
        <span className="text-gray-800 font-medium">Microsoft</span>
      </div>
    ),
    amazon: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <i className="fab fa-amazon text-3xl text-gray-800"></i>
        <span className="text-gray-800 font-medium">Amazon</span>
      </div>
    ),
    google: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <i className="fab fa-google text-3xl text-gray-800"></i>
        <span className="text-gray-800 font-medium">Google</span>
      </div>
    ),
    clickup: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <svg className="h-[32px] w-[32px]" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="clickup-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF3A8C" />
              <stop offset="50%" stopColor="#FF8A00" />
              <stop offset="100%" stopColor="#FFC700" />
            </linearGradient>
            <linearGradient id="clickup-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#149AFB" />
              <stop offset="100%" stopColor="#7B68EE" />
            </linearGradient>
          </defs>
          <path d="M8 16L14 22L24 8" fill="url(#clickup-gradient-1)" transform="rotate(-45 16 16) scale(0.8)" />
          <path d="M4 12L12 20L28 4" fill="url(#clickup-gradient-2)" transform="rotate(45 16 16) scale(0.6)" />
        </svg>
        <span className="text-gray-800 font-medium">ClickUp</span>
      </div>
    ),
    calendly: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <svg className="h-[32px] w-[32px]" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" fill="#006BFF"/>
          <path d="M8 2v4M16 2v4M3 10h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <rect x="7" y="14" width="2" height="2" fill="white" rx="0.5"/>
          <rect x="11" y="14" width="2" height="2" fill="white" rx="0.5"/>
          <rect x="15" y="14" width="2" height="2" fill="white" rx="0.5"/>
        </svg>
        <span className="text-gray-800 font-medium">Calendly</span>
      </div>
    ),
    github: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <svg className="h-[24px] w-[24px]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <span className="text-gray-800 font-medium">GitHub</span>
      </div>
    ),
    reactjs: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <svg className="h-[24px] w-[24px]" viewBox="0 0 24 24" fill="none">
          <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.823 6.855l-.133.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 25.049 25.049 0 0 1-3.233-.501z" fill="#61DAFB"/>
        </svg>
        <span className="text-gray-800 font-medium">React</span>
      </div>
    ),
    slack: () => (
      <div className="h-fit flex items-center justify-start font-bold text-xl gap-3">
        <i className="fab fa-slack text-3xl text-gray-800"></i>
        <span className="text-gray-800 font-medium">Slack</span>
      </div>
    ),
  };

  const allLogos = [
    Logos.corvus,
    Logos.tailwindcss,
    Logos.nextjs,
    Logos.vscode,
    Logos.resend,
    Logos.cloudflare,
    Logos.porkbun,
    Logos.apple,
    Logos.microsoft,
    Logos.amazon,
    Logos.google,
    Logos.clickup,
    Logos.calendly,
    Logos.github,
    Logos.reactjs,
    Logos.slack,
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Powered by Industry Standards</h2>
          <p className="text-gray-600">Built with modern technologies and trusted by leading companies</p>
        </div>
        <Marquee pauseOnHover speed={25} className="py-4">
          {allLogos.map((Logo, index) => (
            <div
              key={index}
              className="relative h-full w-fit mx-16 flex items-center justify-start opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <Logo />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoMarquee;
