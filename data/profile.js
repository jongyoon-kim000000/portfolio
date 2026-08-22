/* Public profile data. Keep private contact details and NDA material out of this file. */
window.PORTFOLIO_PROFILE = {
  showreel: { enabled: false, url: "" },
  resume: { enabled: false, ja: "", en: "", ko: "", zh: "" },
  links: {
    email: { visible: true, url: "mailto:trueb000@naver.com" },
    youtube: { visible: true, url: "https://youtube.com/@lil_jong_lil" },
    linkedin: { visible: true, url: "https://www.linkedin.com/in/liljonglil" },
    blog: { visible: false, url: "https://m.blog.naver.com/trueb000" },
    github: { visible: false, url: "" },
    twitter: { visible: false, url: "" }
  },
  responsibilities: [
    {
      title: { ja: "キャラクターリギング", en: "Character Rigging", ko: "캐릭터 리깅", zh: "角色绑定" },
      description: {
        ja: "3ds Maxでのリギングデータ制作、インゲーム実装を考慮したセットアップ、アニメーション制作支援。",
        en: "3ds Max rigging data, in-game-ready character setup and animation production support.", ko: "3ds Max 리깅 데이터 제작, 인게임 캐릭터 세팅과 애니메이션 제작 지원.", zh: "3ds Max绑定数据制作、面向游戏内实现的角色设置与动画制作支持。"
      }
    },
    {
      title: { ja: "リギングツールと自動化", en: "Rigging Tools / Automation", ko: "리깅 도구 / 자동화", zh: "绑定工具 / 自动化" },
      description: {
        ja: "MaxScriptとPythonによる反復作業の自動化、制作ボトルネックとセットアップ工程の改善。",
        en: "MaxScript and Python automation for repetitive rigging work, bottlenecks and setup workflows.", ko: "MaxScript와 Python으로 리깅 반복 작업과 세팅 공정의 병목을 개선.", zh: "使用MaxScript与Python自动化绑定重复工作，改善制作瓶颈与设置流程。"
      }
    },
    {
      title: { ja: "アニメーションパイプライン", en: "Animation Pipeline", ko: "애니메이션 파이프라인", zh: "动画管线" },
      description: {
        ja: "制作パイプラインの構築・保守、RigとAnimation Asset間の技術課題への対応。",
        en: "Animation pipeline development and maintenance, including technical issues between rigs and animation assets.", ko: "애니메이션 파이프라인 구축과 유지보수, 리그와 애니메이션 에셋 사이의 기술 문제 대응.", zh: "动画管线的构建与维护，以及绑定与动画资产之间的技术问题处理。"
      }
    },
    {
      title: { ja: "Unreal Engine 5", en: "Unreal Engine 5", ko: "Unreal Engine 5", zh: "Unreal Engine 5" },
      description: {
        ja: "IK Retargeting、Control Rig、Animation Blueprint、Secondary Animationを含むキャラクター実装。",
        en: "Character implementation including IK Retargeting, Control Rig, Animation Blueprint and secondary animation.", ko: "IK Retargeting, Control Rig, Animation Blueprint와 세컨더리 애니메이션을 포함한 캐릭터 구현.", zh: "包括IK Retargeting、Control Rig、Animation Blueprint与次级动画的角色实现。"
      }
    }
  ],
  skills: [
    { name: "Character Rigging", detail: { ja: "キャラクターリギング", en: "Character rigging", ko: "캐릭터 리깅", zh: "角色绑定" }, status: "production" },
    { name: "3ds Max", detail: { ja: "リギング制作環境", en: "Primary rigging DCC", ko: "주력 리깅 DCC", zh: "主要绑定DCC" }, status: "production" },
    { name: "MaxScript", detail: { ja: "リギングツール・自動化", en: "Rigging tools & automation", ko: "리깅 도구·자동화", zh: "绑定工具与自动化" }, status: "production" },
    { name: "Animation Pipeline", detail: { ja: "構築・保守・技術支援", en: "Development, maintenance & support", ko: "구축·유지보수·기술 지원", zh: "构建、维护与技术支持" }, status: "production" },
    { name: "Unreal Engine 5", detail: { ja: "キャラクター実装", en: "Character implementation", ko: "캐릭터 구현", zh: "角色实现" }, status: "production" },
    { name: "IK Retargeting", detail: { ja: "アニメーション実装", en: "Animation implementation", ko: "애니메이션 구현", zh: "动画实现" }, status: "production" },
    { name: "Control Rig", detail: { ja: "UE5キャラクターリグ", en: "UE5 character rigging", ko: "UE5 캐릭터 리깅", zh: "UE5角色绑定" }, status: "working" },
    { name: "Animation Blueprint", detail: { ja: "キャラクターアニメーション実装", en: "Character animation implementation", ko: "캐릭터 애니메이션 구현", zh: "角色动画实现" }, status: "production" },
    { name: "Rigid Body", detail: { ja: "セカンダリアニメーション", en: "Secondary animation", ko: "세컨더리 애니메이션", zh: "次级动画" }, status: "production" },
    { name: "RBF Solver", detail: { ja: "リグ・アニメーション技術", en: "Rigging & animation systems", ko: "리깅·애니메이션 시스템", zh: "绑定与动画系统" }, status: "working" },
    { name: "Chaos Cloth", detail: { ja: "UE5物理・クロス", en: "UE5 physics & cloth", ko: "UE5 물리·클로스", zh: "UE5物理与布料" }, status: "production" },
    { name: "Python", detail: { ja: "制作自動化", en: "Production automation", ko: "프로덕션 자동화", zh: "制作流程自动化" }, status: "working" },
    { name: "MotionBuilder", detail: { ja: "アニメーションワークフロー", en: "Animation workflow", ko: "애니메이션 워크플로", zh: "动画工作流" }, status: "working" },
    { name: "Technical Animation", detail: { ja: "リギングと実装の接続", en: "Bridging rigging and implementation", ko: "리깅과 구현 연결", zh: "连接绑定与实现" }, status: "working" },
    { name: "Maya", detail: { ja: "リギング・スキニング", en: "Rigging & skinning", ko: "리깅·스키닝", zh: "绑定与蒙皮" }, status: "learning" },
    { name: "Maya Python", detail: { ja: "リグ自動化", en: "Rig automation", ko: "리그 자동화", zh: "绑定自动化" }, status: "learning" },
    { name: "mGear", detail: { ja: "モジュラーリグ", en: "Modular rig architecture", ko: "모듈형 리그", zh: "模块化绑定架构" }, status: "learning" },
  ],
  community: {
    visible: false,
    organization: "CulCom",
    role: { ja: "語学スタディリーダー", en: "Language Study Leader", ko: "외국어 스터디 리더", zh: "语言学习小组负责人" },
    period: "2026 — Present",
    activities: [
      {
        title: { ja: "セッション運営", en: "Session Facilitation", ko: "세션 진행", zh: "活动组织" },
        description: { ja: "外国語会話スタディの進行と参加者の学習をサポート。", en: "Facilitate language-study sessions and support participant learning.", ko: "외국어 회화 스터디를 진행하고 참가자의 학습을 지원합니다.", zh: "组织外语会话学习活动并支持参与者学习。" }
      },
      {
        title: { ja: "コミュニケーション", en: "Group Communication", ko: "그룹 커뮤니케이션", zh: "团队沟通" },
        description: { ja: "グループでの説明、進行、継続的な参加を支えるコミュニケーション経験。", en: "Build experience in explanation, facilitation and ongoing group communication.", ko: "설명과 진행을 맡고 구성원의 지속적인 참여를 돕는 커뮤니케이션 경험을 쌓고 있습니다.", zh: "通过讲解、引导和持续参与支持，积累团队沟通经验。" }
      }
    ]
  },
  /* Do not render pending qualifications as earned certifications. */
  pendingQualifications: [
    { name: "Foreign Language Education Manager, Level 2", status: "pending", issued: "TODO" },
    { name: "Foreign Language Education Manager, Level 1", status: "expected", issued: "Jan 2027" }
  ]
};
