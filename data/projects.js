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
    embedUrl: "https://www.youtube.com/embed/mm6w2ufD6ME?rel=0&modestbranding=1",
    videoTitle: {
      ja: "Project TAL 公式トレーラー",
      en: "Project TAL Official Trailer",
      ko: "Project TAL 공식 트레일러",
      zh: "Project TAL 官方预告片"
    },
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
    id: "aion2",
    status: "published",
    category: { ja: "プロダクション経験", en: "Production Experience", ko: "프로덕션 경험", zh: "项目制作经验" },
    title: "AION 2",
    shortLabel: "AION / 2",
    summary: {
      ja: "キャラクターカスタマイズに対応するPC/NPC装備のリギング・スキニングとUE5物理セットアップ。",
      en: "PC/NPC equipment rigging and skinning against body customization, with UE5 physics setup.",
      ko: "체형 커스터마이징에 대응하는 PC/NPC 장비 리깅·스키닝과 UE5 물리 세팅.",
      zh: "对应角色体型自定义的PC/NPC装备绑定、蒙皮与UE5物理设置。"
    },
    technologies: ["Unreal Engine 5", "3ds Max", "Rigging", "Skinning"],
    detailPage: "projects/aion2.html",
    visualType: "production",
    thumbnail: "https://i.ytimg.com/vi/EI6qhsPIcd0/maxresdefault.jpg",
    thumbnailAlt: {
      ja: "AION 2公式映像のYouTubeサムネイル",
      en: "YouTube thumbnail for the official AION 2 video",
      ko: "AION 2 공식 영상 YouTube 썸네일",
      zh: "AION 2官方视频的YouTube缩略图"
    },
    externalUrl: "https://www.youtube.com/watch?v=EI6qhsPIcd0",
    embedUrl: "https://www.youtube.com/embed/EI6qhsPIcd0?rel=0&modestbranding=1",
    videoTitle: {
      ja: "AION 2 公式映像",
      en: "AION 2 Official Video",
      ko: "AION 2 공식 영상",
      zh: "AION 2 官方视频"
    },
    nda: true,
    sections: {
      overview: {
        ja: "NCSoftのMMORPG「AION 2」開発に契約社員として参加しました（2024年2月〜6月）。キャラクターカスタマイズに対応する装備アセットのリギング・スキニングを中心に担当し、実プロダクションの品質基準とパイプラインを経験しました。公開情報の範囲で担当領域を紹介します。",
        en: "I joined NCSoft's MMORPG AION 2 as a contract rigging artist (Feb – Jun 2024), focusing on rigging and skinning equipment assets against the character customization system. This was my first experience with a large studio's production quality bar and pipeline. This page uses public information only.",
        ko: "NCSoft의 MMORPG 'AION 2' 개발에 계약직으로 참여했습니다(2024년 2월~6월). 캐릭터 커스터마이징에 대응하는 장비 에셋의 리깅·스키닝을 중심으로 담당하며 대형 스튜디오의 품질 기준과 파이프라인을 경험했습니다. 공개 정보만 사용해 담당 영역을 소개합니다.",
        zh: "我以合同制身份参与了NCSoft的MMORPG《AION 2》开发（2024年2月至6月），主要负责与角色体型自定义系统对应的装备资产绑定与蒙皮，并体验了大型工作室的品质标准与制作管线。本页仅使用公开信息。"
      },
      problem: {
        ja: "体型カスタマイズを持つMMORPGでは、武器・衣装・防具などの装備が全ての体型バリエーションで破綻なく変形する必要があります。大量の装備アセットに対する反復的なリギング・スキニング作業は、品質の一貫性と作業速度の両立が課題になります。",
        en: "In an MMORPG with body customization, every weapon, outfit and armor piece must deform correctly across all body variations. Rigging and skinning a large volume of equipment assets makes consistency and throughput compete with each other.",
        ko: "체형 커스터마이징이 있는 MMORPG에서는 무기·복식·방어구 등 모든 장비가 모든 체형 변형에서 깨짐 없이 동작해야 합니다. 대량의 장비 에셋에 대한 반복적인 리깅·스키닝 작업에서는 품질 일관성과 작업 속도의 양립이 과제가 됩니다.",
        zh: "在具有体型自定义的MMORPG中，武器、服饰、防具等所有装备都必须在全部体型变化下正确变形。面对大量装备资产的重复绑定与蒙皮工作，品质一致性与效率成为核心挑战。"
      },
      solution: {
        ja: "PC/NPCの各種装備をカスタマイズ体系に合わせてリギング・スキニングし、UE5 Animation Blueprintでの物理セットアップ、Skeletal Mesh LODによる最適化を担当しました。反復作業はMaxScriptで自動化し、作業効率を高めました。",
        en: "I rigged and skinned PC/NPC equipment against the customization system, set up physics in UE5 Animation Blueprints and optimized assets through Skeletal Mesh LODs. Repetitive steps were automated with MaxScript to raise throughput.",
        ko: "PC/NPC의 각종 장비를 커스터마이징 체계에 맞춰 리깅·스키닝하고, UE5 Animation Blueprint 물리 세팅과 Skeletal Mesh LOD 최적화를 담당했습니다. 반복 작업은 MaxScript로 자동화해 업무 효율을 높였습니다.",
        zh: "我根据自定义体系对PC/NPC各类装备进行绑定与蒙皮，负责UE5 Animation Blueprint物理设置和Skeletal Mesh LOD优化，并用MaxScript将重复工作自动化以提高效率。"
      },
      technical: ["Equipment Rigging / Skinning", "Body Customization Support", "UE5 Animation Blueprint Physics", "Skeletal Mesh LOD Optimization", "MaxScript Automation"],
      result: {
        ja: "カスタマイズ対応の装備アセットを安定して供給し、LOD最適化と自動化によって制作効率の改善に貢献しました。",
        en: "I delivered customization-ready equipment assets reliably and contributed to production efficiency through LOD optimization and automation.",
        ko: "커스터마이징에 대응하는 장비 에셋을 안정적으로 공급하고, LOD 최적화와 자동화를 통해 제작 효율 개선에 기여했습니다.",
        zh: "稳定交付支持自定义的装备资产，并通过LOD优化与自动化为制作效率的提升做出贡献。"
      },
      learned: {
        ja: "大規模スタジオのアセットパイプライン、ライブ品質基準、カスタマイズシステムを前提としたリギング設計を学び、次のプロダクション経験の土台になりました。",
        en: "I learned large-studio asset pipelines, live-quality standards and rigging design around a customization system — the foundation for my next production role.",
        ko: "대형 스튜디오의 에셋 파이프라인, 라이브 품질 기준, 커스터마이징 시스템을 전제로 한 리깅 설계를 배웠고, 다음 프로덕션 경험의 토대가 되었습니다.",
        zh: "我学习了大型工作室的资产管线、上线品质标准以及基于自定义系统的绑定设计，为之后的制作经历打下了基础。"
      }
    }
  },
  {
    id: "serva-me",
    status: "published",
    category: { ja: "学生制作 / リリース作品", en: "Academic / Released Project", ko: "졸업작품 / 출시 작품", zh: "学生制作 / 已发行作品" },
    title: "SERVA ME",
    shortLabel: "SERVA / ME",
    summary: {
      ja: "卒業制作として開発し、BIC 2023で展示、STOVEで無料リリースしたソウルライクアクションゲーム。",
      en: "A soulslike action game developed as a graduation project, exhibited at BIC 2023 and released for free on STOVE.",
      ko: "졸업작품으로 개발해 BIC 2023에 선정·전시하고 스토브에 무료 출시한 소울라이크 액션 게임.",
      zh: "作为毕业作品开发、入选并参加BIC 2023展出，并在STOVE免费发行的类魂动作游戏。"
    },
    technologies: ["Unreal Engine 4 → 5", "Character Rigging", "Gameplay Animation", "Optimization"],
    detailPage: "projects/serva-me.html",
    visualType: "production",
    thumbnail: "assets/serva-me-thumbnail.png",
    thumbnailAlt: {
      ja: "SERVA MEのキャラクターサムネイル",
      en: "Character thumbnail for SERVA ME",
      ko: "SERVA ME 캐릭터 썸네일",
      zh: "SERVA ME角色缩略图"
    },
    externalUrl: "https://www.youtube.com/watch?v=C5DbwWPLnKc",
    storeUrl: "https://store.onstove.com/ko/games/2651",
    videoTitle: {
      ja: "SERVA ME 公式映像",
      en: "SERVA ME Official Video",
      ko: "SERVA ME 공식 영상",
      zh: "SERVA ME 官方视频"
    },
    sections: {
      overview: {
        ja: "청강文化産業大学ゲームコンテンツ専攻の3年次卒業制作として開発したソウルライクアクションゲームです。BIC 2023に選定・展示され、STOVEで無料リリースしました。チームではPM、リガー、アニメーションパートリーダーを担当しました。",
        en: "A soulslike action game developed as a third-year graduation project at Chungkang College of Cultural Industries. It was selected for and exhibited at BIC 2023, then released for free on STOVE. I served as PM, rigger and animation lead.",
        ko: "청강문화산업대학교 게임콘텐츠스쿨 3학년 졸업작품으로 개발한 소울라이크 액션 게임입니다. BIC 2023에 선정되어 전시를 진행했고, 스토브에 무료 출시했습니다. 팀에서는 PM, 리거, 애니메이션 파트장을 맡았습니다.",
        zh: "这是我在Chungkang College of Cultural Industries游戏内容专业三年级开发的毕业作品，一款类魂动作游戏。作品入选并参加了BIC 2023展出，之后在STOVE免费发行。我担任PM、绑定美术与动画负责人。"
      },
      problem: {
        ja: "UE4で開発を開始し、制作が進むにつれてNaniteとLumenの必要性が明確になったためUE5へのアップグレードを進めました。初めて3Dゲーム制作に取り組む企画メンバーと、ゲームシステムの設計・実装方法をすり合わせることも重要な課題でした。",
        en: "Development started in UE4, but the project needed Nanite and Lumen as production progressed, so we planned and executed an upgrade to UE5. Aligning game-system design and implementation with a team new to 3D game development was another major challenge.",
        ko: "UE4로 개발을 시작했지만 제작이 진행되면서 Nanite와 Lumen의 필요성이 커져 UE5 업그레이드를 진행했습니다. 3D 게임 개발이 처음인 기획 파트와 시스템 설계 및 구현 방법을 맞춰가는 과정도 중요한 과제였습니다.",
        zh: "项目最初使用UE4开发，随着制作推进逐渐需要Nanite与Lumen，因此推进了UE5升级。与首次进行3D游戏开发的策划成员共同确定系统设计与实现方式，也是重要挑战。"
      },
      solution: {
        ja: "キャラクターリギング、プレイヤーのインゲームモーション、演出アニメーションを中心に担当し、モンスターの企画・モーション制作にも参加しました。インゲームライティング、最適化、ルートボーン、プレイヤーコンポーネント、カプセル、ステートマシンなどの技術課題にも対応しました。",
        en: "I led character rigging, player gameplay motion and cinematic animation, while also contributing to monster design and motion. I helped solve technical issues involving in-game lighting, optimization, root bones, player components, collision capsules and state machines.",
        ko: "캐릭터 리깅, 플레이어 인게임 모션과 연출 애니메이션을 중심으로 담당하고 몬스터 기획과 모션 제작에도 참여했습니다. 인게임 라이팅, 최적화, 루트 본, 플레이어 컴포넌트, 캡슐, 스테이트 머신 관련 기술 이슈에도 대응했습니다.",
        zh: "我主要负责角色绑定、玩家游戏内动作与演出动画，也参与了怪物设计与动作制作，并协助处理游戏内灯光、优化、根骨骼、玩家组件、碰撞胶囊与状态机等技术问题。"
      },
      technical: ["Unreal Engine 4 → 5 Upgrade", "Character Rigging", "Gameplay Animation", "Cinematic Animation", "Root Bone / State Machine", "Lighting / Optimization"],
      result: {
        ja: "チーム制作を通じてゲームシステムの設計と実装への理解を深め、キャラクター制作からエンジン上の調整まで一貫して担当しました。BIC 2023での展示とSTOVEでの無料リリースまで完成させた作品です。",
        en: "The project deepened my understanding of game-system design and implementation, while letting me own the workflow from character creation through engine-side iteration. It was completed through BIC 2023 exhibition and a free STOVE release.",
        ko: "팀 제작을 통해 게임 시스템의 설계와 구현에 대한 이해를 넓혔고, 캐릭터 제작부터 엔진 내 조정까지 일관되게 담당했습니다. BIC 2023 전시와 스토브 무료 출시까지 완성한 작품입니다.",
        zh: "通过团队制作，我加深了对游戏系统设计与实现的理解，并负责从角色制作到引擎内调试的完整流程。作品最终完成了BIC 2023展出并在STOVE免费发行。"
      },
      learned: {
        ja: "UE4/UE5の運用、ROOTボーンとプレイヤーコンポーネントの制御、インゲームアニメーション制作、複数職種で進める制作パイプラインについて実践的に学びました。",
        en: "I gained practical experience with UE4/UE5 production, root-bone and player-component control, gameplay animation authoring and pipeline design across disciplines.",
        ko: "UE4·UE5 운용, 루트 본과 플레이어 컴포넌트 제어, 인게임 애니메이션 제작, 여러 직군이 함께 진행하는 제작 파이프라인을 실무적으로 배웠습니다.",
        zh: "我实践学习了UE4/UE5制作、根骨骼与玩家组件控制、游戏内动画制作，以及跨职能团队的制作管线设计。"
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
