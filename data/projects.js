/* Project status: published | wip | planned | private. Only published and opted-in WIP items render publicly. */
window.PORTFOLIO_PROJECTS = [
  {
    id: "project-tal",
    status: "published",
    category: { ja: "プロダクション経験", en: "Production Experience", ko: "프로덕션 경험", zh: "项目制作经验" },
    title: "Project TAL",
    shortLabel: "PROJECT / TAL",
    summary: {
      ja: "コンソールゲーム制作でのキャラクターリギング、アニメーションパイプライン、UE5キャラクター実装。",
      en: "Character rigging, animation pipeline support and UE5 character implementation for console game production.",
      ko: "콘솔 게임 제작의 캐릭터 리깅, 애니메이션 파이프라인 지원과 UE5 캐릭터 구현.",
      zh: "主机游戏制作中的角色绑定、动画管线支持与UE5角色实现。"
    },
    technologies: ["Unreal Engine 5", "3ds Max", "Rigging", "Pipeline"],
    detailPage: "projects/project-tal.html",
    visualType: "production",
    thumbnail: "https://i.ytimg.com/vi/mm6w2ufD6ME/maxresdefault.jpg",
    thumbnailAlt: {
      ja: "Project TAL公式トレーラーのYouTubeサムネイル",
      en: "YouTube thumbnail for the official Project TAL trailer",
      ko: "Project TAL 공식 트레일러 YouTube 썸네일",
      zh: "Project TAL官方预告片的YouTube缩略图"
    },
    externalUrl: "https://www.youtube.com/watch?v=mm6w2ufD6ME",
    nda: true,
    sections: {
      overview: {
        ja: "Madngine · NX Studioで、プロトタイプ段階から参加しているコンソールゲームプロジェクトです。公開情報の範囲で、担当領域と制作フローへの貢献を紹介します。",
        en: "A console game project at Madngine · NX Studio that I joined from the prototype stage. This page describes my responsibilities and workflow contribution using public information only.",
        ko: "Madngine · NX Studio에서 프로토타입 단계부터 참여한 콘솔 게임 프로젝트입니다. 공개 정보만 사용해 담당 영역과 제작 흐름에 기여한 내용을 소개합니다.",
        zh: "这是我在Madngine · NX Studio从原型阶段开始参与的主机游戏项目。本页仅使用公开信息介绍我的职责与工作流程贡献。"
      },
      problem: {
        ja: "キャラクター制作では、DCC上のRig、Animation Asset、Unreal Engineでの実装が連続して機能する必要があります。工程間の不整合や反復作業は、制作全体の安定性に影響します。",
        en: "Character production requires DCC rigs, animation assets and Unreal Engine implementation to work as one continuous flow. Inconsistencies and repetitive work between stages affect production reliability.",
        ko: "캐릭터 제작에서는 DCC 리그, 애니메이션 에셋과 Unreal Engine 구현이 하나의 흐름으로 동작해야 합니다. 단계 사이의 불일치와 반복 작업은 제작 안정성에 영향을 줍니다.",
        zh: "角色制作需要DCC绑定、动画资产与Unreal Engine实现作为连续流程协同工作。环节间的不一致和重复操作会影响制作稳定性。"
      },
      solution: {
        ja: "キャラクターリギング、アニメーション制作支援、UE5セットアップ、技術課題対応を横断して担当し、MaxScriptとPythonによる自動化で制作フローを支えています。",
        en: "I work across character rigging, animation support, UE5 setup and technical troubleshooting, while using MaxScript and Python automation to support the production flow.",
        ko: "캐릭터 리깅, 애니메이션 지원, UE5 세팅과 기술 문제 대응을 연결해 담당하며 MaxScript와 Python 자동화로 제작 흐름을 지원합니다.",
        zh: "我负责角色绑定、动画支持、UE5设置和技术问题处理，并使用MaxScript与Python自动化支持制作流程。"
      },
      technical: ["Character Rigging", "Animation Pipeline Support", "IK Retargeting / Control Rig", "Rigid Body / RBF Solver", "Chaos Cloth Integration", "Custom MetaHuman Workflow Support"],
      result: {
        ja: "リギングからエンジン実装までの連続したワークフローを支援し、反復セットアップの標準化と制作上の技術課題への対応に取り組んでいます。",
        en: "I support the connected workflow from rigging through engine implementation, helping standardize repetitive setup and resolve production technical issues.",
        ko: "리깅부터 엔진 구현까지 연결된 워크플로를 지원하며 반복 세팅의 표준화와 제작 기술 문제 해결에 기여하고 있습니다.",
        zh: "我支持从角色绑定到引擎实现的连续工作流，帮助标准化重复设置并解决制作中的技术问题。"
      },
      learned: {
        ja: "大規模制作における部門間連携、リアルタイムキャラクター実装、アーティスト向けパイプラインの信頼性を継続的に学んでいます。",
        en: "I continue to deepen my understanding of cross-discipline collaboration, real-time character implementation and reliable artist-facing pipelines in production.",
        ko: "실무에서 직군 간 협업, 실시간 캐릭터 구현과 아티스트가 안정적으로 사용할 수 있는 파이프라인에 대한 이해를 넓히고 있습니다.",
        zh: "我持续加深对跨职能协作、实时角色实现以及面向美术人员的可靠制作管线的理解。"
      }
    }
  },
  {
    id: "variable-fk",
    status: "planned",
    category: { ja: "リギングシステム / ツール開発", en: "Rigging System / Tool Development" },
    title: "Variable FK Tool",
    shortLabel: "VARIABLE / FK",
    summary: {
      ja: "柔軟なFKコントローラ階層を構築する、3ds Max向けリギングツール。",
      en: "A 3ds Max rigging tool for building flexible FK controller hierarchies."
    },
    technologies: ["3ds Max", "MaxScript", "Rigging"],
    detailPage: "projects/variable-fk.html",
    visualType: "tool",
    sections: {
      overview: { ja: "Variable FK構造を利用し、用途に応じたFKコントローラ階層を構成する個人ツールプロジェクトです。デモ映像と開発期間は資料整理後に追加します。", en: "A personal tool project that uses a Variable FK structure to build task-appropriate FK controller hierarchies. Demo media and development dates will be added when the source material is prepared." },
      problem: { ja: "複雑なFKチェーンでは、コントローラ階層の調整と反復セットアップに時間がかかり、手作業による設定ミスが起こりやすくなります。", en: "Complex FK chains require time-consuming hierarchy adjustments and repetitive setup, which can introduce manual configuration errors." },
      solution: { ja: "コントローラ階層の生成と必要なセットアップをツール化し、リガーが構造設計に集中できるワークフローを目指しました。", en: "The tool automates controller hierarchy creation and required setup so riggers can focus on the structure itself." },
      technical: ["Variable FK Architecture", "Controller Hierarchy", "Automated Setup", "MaxScript UI"],
      result: { ja: "反復する階層セットアップを標準化し、手作業の削減を目指しました。定量的な結果は検証後に追記します。", en: "The project standardizes repetitive hierarchy setup and aims to reduce manual steps. Quantitative results will be added after validation." },
      learned: { ja: "FK階層設計、リグツールの操作性、再利用可能なセットアップ構造について理解を深めました。", en: "The project strengthened my understanding of FK hierarchy design, rig-tool UX and reusable setup architecture." }
    }
  },
  {
    id: "rigging-multitool",
    status: "planned",
    category: { ja: "リギングツール / パイプライン", en: "Rigging Tools / Pipeline" },
    title: "3ds Max Rigging Multitool",
    shortLabel: "RIGGING / MULTITOOL",
    summary: {
      ja: "リギング制作の反復工程をまとめて支援するMaxScriptベースのツールセット。",
      en: "A MaxScript toolkit that supports repetitive tasks across the rigging workflow."
    },
    technologies: ["3ds Max", "MaxScript", "Automation", "Rigging"],
    detailPage: "projects/rigging-multitool.html",
    visualType: "tool",
    sections: {
      overview: { ja: "複数のリギング自動化機能を一つの制作ツールとして整理したプロジェクトです。各機能のデモとUI画像は資料準備後に追加します。", en: "A production toolkit that consolidates several rigging automation features. Feature demos and UI images will be added when source media is ready." },
      problem: { ja: "Bone、Spline、Constraint、Guideのセットアップには定型的な手順が多く、反復作業と入力ミスが制作速度を低下させます。", en: "Bone, spline, constraint and guide setup involves many routine steps where repetition and input errors slow production." },
      solution: { ja: "頻繁に使うセットアップを再利用可能な機能としてまとめ、操作の一貫性とリガーの作業速度を高める構造にしました。", en: "Frequently used setups are consolidated into reusable features to improve consistency and rigging speed." },
      technical: ["Bone Divider", "Spline / Spline IK Guide", "Path Constraint Guide", "Up Node System", "Parenting / Constraint Automation", "LookAt / Reverse FK Setup"],
      result: { ja: "複数の反復工程を一つの操作環境に集約し、ワークフローの標準化を目指しました。実測値は公開可能な検証後に追記します。", en: "The toolkit consolidates multiple repetitive steps into one workspace and aims to standardize the workflow. Measured results will be added after public validation." },
      learned: { ja: "機能単位のモジュール設計、エラーを減らすUI、実制作で再利用しやすいツール構成を学びました。", en: "I learned to design modular features, error-resistant UI and tools that remain reusable in production." }
    }
  },
  { id: "modular-character-rig", status: "planned", title: "Modular Character Rig", technologies: ["Maya", "mGear", "Python"], detailPage: "projects/modular-character-rig.html" },
  { id: "maya-rigging-toolkit", status: "planned", title: "Maya Rigging Automation Toolkit", technologies: ["Maya", "Python", "PySide"], detailPage: "" },
  { id: "ue5-animation-system", status: "planned", title: "UE5 Character Animation System", technologies: ["Unreal Engine 5", "Control Rig", "FullBody IK"], detailPage: "projects/ue5-animation-system.html" }
];
