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
    },
    {
      title: { ja: "ツールと技術課題対応", en: "Tools & Troubleshooting", ko: "도구와 기술 문제 대응", zh: "工具与技术问题处理" },
      description: {
        ja: "MaxScriptとPythonによる反復作業の自動化、制作ボトルネックとエンジン統合課題の改善。",
        en: "MaxScript and Python automation for repetitive work, production bottlenecks and engine-integration issues.", ko: "MaxScript와 Python으로 반복 작업을 자동화하고 제작 병목과 엔진 연동 문제를 개선.", zh: "使用MaxScript与Python自动化重复工作，改善制作瓶颈与引擎集成问题。"
      }
    }
  ],
  skills: [
    { name: "3ds Max", detail: { ja: "キャラクターリギング", en: "Character rigging", ko: "캐릭터 리깅", zh: "角色绑定" }, status: "production" },
    { name: "MaxScript", detail: { ja: "ツール開発・自動化", en: "Tool development & automation", ko: "도구 개발·자동화", zh: "工具开发与自动化" }, status: "production" },
    { name: "Unreal Engine 5", detail: { ja: "キャラクター実装", en: "Character implementation", ko: "캐릭터 구현", zh: "角色实现" }, status: "production" },
    { name: "Animation Pipeline", detail: { ja: "構築・保守・技術支援", en: "Development, maintenance & support", ko: "구축·유지보수·기술 지원", zh: "构建、维护与技术支持" }, status: "production" },
    { name: "Python", detail: { ja: "プロダクション自動化", en: "Production automation", ko: "프로덕션 자동화", zh: "制作流程自动化" }, status: "working" },
    { name: "MotionBuilder", detail: { ja: "制作ワークフロー", en: "Production workflow", ko: "제작 워크플로", zh: "制作工作流" }, status: "working" },
    { name: "Control Rig", detail: { ja: "UE5での実務経験", en: "Production experience in UE5", ko: "UE5 실무 경험", zh: "UE5项目经验" }, status: "working" },
    { name: "Animation Blueprint", detail: { ja: "実務経験", en: "Production experience", ko: "실무 경험", zh: "项目经验" }, status: "working" },
    { name: "Maya", detail: { ja: "リギング・スキニング", en: "Rigging & skinning", ko: "리깅·스키닝", zh: "绑定与蒙皮" }, status: "learning" },
    { name: "mGear", detail: { ja: "モジュラーリグ", en: "Modular rig architecture", ko: "모듈형 리그", zh: "模块化绑定架构" }, status: "learning" },
    { name: "Maya Python", detail: { ja: "リグ自動化", en: "Rig automation", ko: "리그 자동화", zh: "绑定自动化" }, status: "learning" },
    { name: "Advanced Control Rig", detail: { ja: "FullBody IK・プロシージャルリギング", en: "FullBody IK & procedural rigging", ko: "FullBody IK·프로시저럴 리깅", zh: "FullBody IK与程序化绑定" }, status: "learning" }
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
