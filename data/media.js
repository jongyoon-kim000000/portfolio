/* Public YouTube studies grouped by DCC / engine. Add only videos that are already public. */
window.PORTFOLIO_MEDIA = [
  {
    id: "lJAsXDW2JBU", category: "max", featured: true,
    title: "3ds Max Rigging & Tools Portfolio",
    summary: { ja: "3ds Max環境で制作してきたリギングとツール開発経験をまとめた主要ポートフォリオ映像。", en: "My primary 3ds Max portfolio video, bringing together rigging and tool-development work in this DCC environment.", ko: "3ds Max 환경에서 제작해 온 리깅과 도구 개발 경험을 모은 대표 포트폴리오 영상입니다.", zh: "汇总我在3ds Max环境中角色绑定与工具开发经验的重点作品视频。" },
    tags: ["3ds Max", "Rigging", "MaxScript", "Portfolio"]
  },
  {
    id: "SOAnzwsOyac", category: "max",
    title: "Create IK/FK Rigs in Seconds | LIL IK/FK Tool",
    summary: { ja: "3ds Max向けLIL IK/FK Toolを使い、IK/FKリグを短時間で構築するワークフロー。", en: "A 3ds Max workflow for creating IK/FK rigs in seconds with the LIL IK/FK Tool.", ko: "LIL IK/FK Tool을 활용해 3ds Max에서 IK/FK 리그를 빠르게 구축하는 워크플로입니다.", zh: "使用LIL IK/FK Tool在3ds Max中快速构建IK/FK绑定的工作流。" },
    tags: ["3ds Max", "IK/FK", "Rigging", "Tool Development"]
  },
  {
    id: "yMtR-ILh2OQ", category: "max",
    title: "Biped Additional Bone Tool",
    summary: { ja: "Bipedを基盤にMuscle、Corrective Joint、Auto Skirt Rigの補助ボーン生成を自動化。", en: "Automating helper-bone creation for muscle, corrective-joint and auto-skirt rig workflows based on Biped.", ko: "Biped 기반 Muscle, Corrective Joint와 Auto Skirt Rig 보조 본 생성을 자동화한 작업입니다.", zh: "基于Biped自动生成Muscle、Corrective Joint与Auto Skirt Rig辅助骨骼。" },
    tags: ["3ds Max", "MaxScript", "Biped", "Automation"]
  },
  {
    id: "smgb97RSOJQ", category: "max",
    title: "Space Switch Tool for 3ds Max",
    summary: { ja: "MayaのSpace Switching概念を3ds MaxとMaxScriptのリギングワークフローで検証。", en: "Exploring a Maya-inspired space-switching workflow in 3ds Max with MaxScript.", ko: "Maya의 Space Switching 개념을 3ds Max와 MaxScript 리깅 환경에서 구현한 연구입니다.", zh: "在3ds Max与MaxScript绑定流程中研究受Maya启发的Space Switching。" },
    tags: ["3ds Max", "MaxScript", "Space Switch", "Rigging"]
  },
  {
    id: "1Lny9tXuePQ", category: "max",
    title: "3ds Max Animation Mirror Tool",
    summary: { ja: "アニメーション反転作業を整理し、反復操作を削減する制作ツール。", en: "A production tool that streamlines animation mirroring and reduces repetitive operations.", ko: "애니메이션 미러 작업을 정리하고 반복 조작을 줄이는 제작 도구입니다.", zh: "用于简化动画镜像流程并减少重复操作的制作工具。" },
    tags: ["3ds Max", "MaxScript", "Animation", "Tool UX"]
  },
  {
    id: "-Gz4E4CvYIY", category: "max",
    title: "Variable FK R&D",
    summary: { ja: "Variable FK構造とコントローラ階層の自動化を検証したリギングR&D。", en: "Rigging R&D exploring Variable FK structures and automated controller hierarchies.", ko: "Variable FK 구조와 컨트롤러 계층 자동화를 검증한 리깅 R&D입니다.", zh: "研究Variable FK结构与控制器层级自动化的绑定R&D。" },
    tags: ["3ds Max", "MaxScript", "Variable FK", "R&D"]
  },
  {
    id: "FC9X30yKnuE", category: "max",
    title: "3DsMax | [Facial Riggng & Facial MotionCapture]",
    summary: { ja: "3ds Maxでのフェイシャルリギングとフェイシャルモーションキャプチャの記録。", en: "A 3ds Max study covering facial rigging and facial motion capture.", ko: "3ds Max 기반 페이셜 리깅과 페이셜 모션캡처 작업 기록입니다.", zh: "记录使用3ds Max进行面部绑定与面部动作捕捉的研究。" },
    tags: ["3ds Max", "Facial Rigging", "Motion Capture"]
  },
  {
    id: "Ic-qh_fLMFU", category: "max",
    title: "R&D | Stylized Character Facial Rigging",
    summary: { ja: "スタイライズドキャラクターのフェイシャルリギングR&D。", en: "Facial rigging R&D for a stylized character.", ko: "스타일라이즈드 캐릭터 페이셜 리깅 R&D입니다.", zh: "风格化角色面部绑定R&D。" },
    tags: ["3ds Max", "Facial Rigging", "R&D"]
  },
  {
    id: "qC3BtDyFXtM", category: "max",
    title: "3Ds Max | Character Animation Library",
    summary: { ja: "3ds Maxで制作したキャラクターアニメーションライブラリ。", en: "A character animation library created in 3ds Max.", ko: "3ds Max로 제작한 캐릭터 애니메이션 라이브러리입니다.", zh: "使用3ds Max制作的角色动画库。" },
    tags: ["3ds Max", "Character Animation", "Animation Library"]
  },
  {
    id: "yN-nqG9nZ9o", category: "maya",
    title: "MetaHuman to Maya Import",
    summary: { ja: "MetaHumanアセットをMayaへ移行するキャラクターワークフローの検証。", en: "A character-workflow study for bringing MetaHuman assets into Maya.", ko: "MetaHuman 에셋을 Maya로 가져오는 캐릭터 워크플로 연구입니다.", zh: "将MetaHuman资产导入Maya的角色工作流研究。" },
    tags: ["Maya", "MetaHuman", "Character Workflow"]
  },
  {
    id: "ki6tiE4IKZ0", category: "ue5",
    title: "UE5 Procedural Skirt Animation",
    summary: { ja: "Control RigとPost Process AnimBPを使ったUE5プロシージャルスカートアニメーションの検証。", en: "A UE5 Control Rig study exploring procedural skirt animation with a Post Process AnimBP.", ko: "UE5 Control Rig와 Post Process AnimBP를 활용한 프로시저럴 스커트 애니메이션 연구입니다.", zh: "使用UE5 Control Rig与Post Process AnimBP研究程序化裙摆动画。" },
    tags: ["Unreal Engine 5", "Control Rig", "Animation Blueprint", "Procedural Animation"]
  },
  {
    id: "ePrgRWvxt18", category: "ue5",
    title: "UE5 Chaos Cloth + Rigid Body",
    summary: { ja: "Chaos ClothとRigid Body Anim Nodeを組み合わせたSecondary Animationの検証。", en: "A secondary-animation study combining Chaos Cloth and the Rigid Body Anim Node.", ko: "Chaos Cloth와 Rigid Body Anim Node를 조합한 세컨더리 애니메이션 연구입니다.", zh: "结合Chaos Cloth与Rigid Body Anim Node的次级动画研究。" },
    tags: ["Unreal Engine 5", "Chaos Cloth", "Rigid Body", "Secondary Animation"]
  },
  {
    id: "TXf0t5mNfPs", category: "ue5",
    title: "MetaHuman Real-Time Facial Capture",
    summary: { ja: "Webcamを利用したMetaHumanのリアルタイムFacial Motion Capture検証。", en: "A real-time MetaHuman facial motion-capture test using a webcam.", ko: "웹캠을 활용한 MetaHuman 실시간 페이셜 모션캡처 테스트입니다.", zh: "使用网络摄像头进行MetaHuman实时面部动作捕捉测试。" },
    tags: ["Unreal Engine 5", "MetaHuman", "Facial", "Motion Capture"]
  }
];
