import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from 'lucide-react';
import ProjectLink from '@/components/ProjectLink';

const projectsData = [{
  title: "ROOMIE",
  description: "An interactive guide designed to simplify the often overwhelming process of moving into a first apartment for young adults.",
  image: "/lovable-uploads/roomie-home-page.png",
  tags: ["UX/UI Design", "Instructional Design"],
  slug: "roomie",
  color: "#F4DB8B",
  overview: "Roomie is a comprehensive digital guide designed to simplify the often overwhelming process of moving into a first apartment. This project emerged from recognizing the challenges and uncertainties that young adults face when navigating housing independence for the first time.",
  challenge: "First-time movers face numerous challenges: understanding lease agreements, budgeting for moving expenses, knowing what essential items to purchase, and navigating roommate dynamics. Traditional resources are often scattered, overwhelming, or fail to address the emotional aspects of this significant life transition.",
  solution: "We designed Roomie with a user-centric workflow that guides users through each stage of the moving process. The interface combines practical checklists with supportive content that acknowledges both the practical and emotional aspects of moving.",
  structureTree: {
    title: "Project Structure",
    image: "/lovable-uploads/map-roomie.png",
    description: "Our project's structure was carefully planned to ensure a logical flow of information and features. The map above illustrates how different sections of the application interconnect, making the moving process more manageable for users."
  },
  wireframes: {
    title: "Initial Wireframes",
    image: "/lovable-uploads/roomie-wireframe.png",
    description: "At the beginning of our process, we focused heavily on wireframing to prioritize product definition, interaction design, and user experience. These wireframes helped us establish the core functionality and user flows before moving into the visual design phase."
  },
  process: ["Conducted extensive user research, interviewing 12 recent first-time movers about their challenges and wishes", "Synthesized insights and created user personas and journey maps to identify key pain points", "Developed multiple iterations of wireframes and prototypes for testing with potential users", "Refined the interface and features based on user feedback", "Created final designs with a warm, approachable aesthetic and calming color palette"],
  designProcessAndAesthetics: "For Roomie, our team crafted a visual language that balances practicality with emotional support. The color palette features warm, calming tones—primarily muted blues and soft yellows—to counteract the stress typically associated with moving. This deliberate choice helps create a sense of stability amidst the chaos of relocation.\n\nTypography plays a crucial role in the interface, with the primary font family being Assistant for its excellent readability and modern feel. Headers use weightier versions of the font (600-700) to create clear visual hierarchy, while body text maintains comfortable readability at 16px minimum.\n\nThe visual components follow a consistent rounded design system—buttons, cards, and input fields all feature softly rounded corners (8px radius) that contribute to the approachable feel of the application. Interactive elements like checklists and the budget calculator use subtle shadows and state changes to provide clear feedback to users.",
  challengesAndSolutions: "A key challenge in the development of Roomie was how to present educational content in a way that feels approachable, interactive, and non-intimidating - especially for users navigating the emotionally sensitive transition into their first shared living situation.\n\nTo solve this, we designed playful micro-interactions, modular content blocks, and gentle language cues that guide users without overwhelming them. We conducted multiple usability tests to ensure the experience felt supportive rather than formal or instructional, ultimately creating a product that informs while empowering users through empathy and clarity.",
  designImages: [{
    title: "Color Palette",
    image: "/lovable-uploads/color-palette-roomie.png",
    description: "Warm, calming tones with soft yellows and muted accents"
  }, {
    title: "Typography",
    image: "/lovable-uploads/typography-roomie.png",
    description: "Assistant font family with weight variations for hierarchy"
  }, {
    title: "Interface Components",
    image: "/lovable-uploads/interface-roomie.png",
    description: "Rounded components with subtle shadows and clear visual feedback"
  }],
  additionalImages: ["/lovable-uploads/roomie-4.png", "/lovable-uploads/roomie-phone.png", "/lovable-uploads/roomie-typs-img.png"],
  link: "https://xd.adobe.com/view/36102754-0760-402c-b896-3eb51e5b9a6f-6343/?fullscreen"
}, {
  title: "SAVE RAPUNZEL",
  description: "An educational platform with a game for students and a content creation tool for educators built around the classic fairy tale.",
  image: "/lovable-uploads/save-repunzel.png",
  tags: ["Game Design", "Educational"],
  slug: "save-rapunzel",
  color: "#10B981",
  overview: "Save Rapunzel is a dual-purpose educational platform consisting of an interactive educational game for students and a content creation tool for educators. The platform transforms traditional learning material into engaging game experiences built around the classic fairy tale of Rapunzel.",
  challenge: "Traditional educational materials often fail to capture students' attention, particularly for challenging subjects. Educators need tools to create engaging content without extensive technical knowledge, while students need learning experiences that are both educational and entertaining.",
  solution: "A dual-purpose educational platform with an interactive game where correct answers help the prince climb Rapunzel's hair, and a content management system allowing educators to create custom question sets without coding knowledge.",
  graphicDevelopment: "The 'Save Rapunzel' project was characterized by an iterative design process that underwent numerous changes from the initial concept to the final product. The graphics and visual elements were carefully tailored to enhance the user experience.\n\nThe project began with a traditional storybook concept, but after user research and consultations, the approach pivoted toward an interactive animation where Rapunzel walks to the window as the story unfolds. This change significantly deepened the user experience and resulted in greater student engagement.",
  technicalChallenges: "One significant challenge was creating a system that allowed both simple interaction for students and flexibility for teachers in content creation. The solution was an intuitive content generator that enables teachers with no technical background to create customized questions, incorporate images, and define parameters such as time per question.\n\nAnother challenge involved displaying Hebrew text and navigating a bidirectional interface, which required developing a unique solution for reversing numbers and English words in mixed text, significantly enhancing the user experience for Hebrew speakers.",
  contentGenerator: "The generator represents a revolutionary approach to creating educational content. Unlike traditional systems, the interface balances simplicity with power, featuring built-in protection mechanisms that prevent the publication of invalid games and provide teachers with immediate feedback.\n\nThe generator includes a progressive approval system that encourages users to create at least 10 quality questions before publishing the game, with a maximum allowance of 30 questions per game. These specifications were established after extensive user research with teachers and education professionals.",
  animationFeatures: "Unique animations enhance the user experience without distracting from the learning process. For instance, when a student answers correctly, the prince climbs higher on Rapunzel's hair, providing immediate visual feedback on progress and strengthening the emotional connection to the story.\n\nThe opening animation sequence shows Rapunzel walking through the tower, with a gradual zoom to the window when she reaches it—a substantial change from the original storybook concept that significantly improved student engagement.",
  collaborativeDevelopment: "The project was characterized by close teamwork, with each team member bringing their skills and strengths to the table. An efficient workflow for file and version management was developed, including systematic backups, change documentation, and meticulous organization of graphic assets.\n\nDespite technical challenges, such as partial code loss at one stage, the system allowed for continued efficient work, resulting in a final product that precisely meets user needs.",
  editorShowcase: {
    title: "Content Generator Interface",
    image: "/lovable-uploads/save-repunzel-editor.png",
    description: "The intuitive content generator allows educators to create customized educational content without technical knowledge, featuring an easy-to-use interface with built-in validation and guidance."
  },
  process: ["Conducted parallel research streams on educators' content creation needs and how children engage with educational games", "Developed user personas for both audience segments (educators and students)", "Created initial concept, wireframes and interactive prototypes", "Conducted testing sessions with both educators and students to refine the user experience", "Designed vibrant fairy tale-inspired visuals for game interface and professional aesthetic for educator interface"],
  designProcessAndAesthetics: "For Save Rapunzel, a dual-interface design system serves both young learners and their educators. The game interface employs a vibrant, fairy tale-inspired color scheme dominated by purples, reds, and golds that evoke a sense of fantasy while maintaining sufficient contrast for readability.\n\nTypography choices differ between the student and educator interfaces. The game side uses the rounded, playful Fredoka font (minimum 18px) to engage younger users, while the educator dashboard employs the same font family with clear weight distinctions to create a visual hierarchy in the content management system.\n\nThe visual elements were carefully designed to create an engaging yet focused learning environment. Game elements like buttons, answer cards, and progress indicators feature rounded edges and vibrant colors that appeal to younger users. Background elements like the tower and clouds incorporate subtle animations to create a living world without distracting from the educational content.\n\nInteractive elements employ consistent visual cues—correct answers trigger animations of the prince climbing higher on Rapunzel's hair, providing immediate visual feedback that reinforces learning progress. The editor interface uses drag-and-drop functionality and inline editing to make content creation intuitive for educators with varying levels of technical expertise.",
  challengesAndSolutions: "A significant challenge in the development process was designing a content editor flexible enough to accommodate various question types while remaining simple for non-technical educators. The solution involved extensive card-sorting exercises with educators to determine the most intuitive organization of functions, resulting in a template-based approach with customization options revealed progressively as users become more comfortable with the system.\n\nAdditionally, optimizing the balance between engaging visual elements and educational clarity required careful consideration. This was addressed through multiple testing iterations with both educators and students to ensure the final product maintained educational effectiveness while providing an engaging user experience.",
  designImages: [{
    title: "Color Palette",
    image: "/lovable-uploads/save-repunzel-color-palette.png",
    description: "Earthy, storybook-inspired color palette with deep blue, moss green, golden yellow, warm copper, and brick red."
  }, {
    title: "Typography",
    image: "/lovable-uploads/save-repunzel-font.png",
    description: "Rounded, playful Fredoka font with consistent sizing for optimal readability"
  }, {
    title: "Visual Elements",
    image: "/lovable-uploads/save-repunzel-interface.png",
    description: "Rounded, vibrant interface elements with consistent visual language"
  }],
  additionalImages: ["/lovable-uploads/save-repunzel-third.png", "/lovable-uploads/save-repunzel-my-games.png", "/lovable-uploads/save-repunzel-sec.png"],
  link: "https://saverapunzel.telem-hit.net/GamesList"
}, {
  title: "BIP",
  description: "A conceptual money transfer application designed specifically for extraterrestrial users with unique perceptual needs.",
  image: "/lovable-uploads/bip-lots-of-iphones.png",
  tags: ["Speculative Design", "Financial Tech"],
  slug: "bip",
  color: "#8B5CF6",
  overview: "BIP is a conceptual money transfer application designed specifically for extraterrestrial users. This speculative design project challenged conventional UI/UX assumptions by considering the unique perceptual and cognitive needs of non-human users.",
  challenge: "Design a financial application that accommodates alien perceptual abilities while maintaining the security and functionality expected in money transfer applications. Standard human-centered design principles needed significant adaptation to serve this unique user group.",
  solution: "A reimagined money transfer app interface through an alien-centered design lens, with new visual languages, interaction patterns, and information hierarchies suited to extraterrestrial perception, while still drawing inspiration from familiar human applications like Bit and PayBox.",
  wireflow: {
    title: "Wireflow",
    image: "/lovable-uploads/bip-wireflow.png",
    description: "The wireflow diagram illustrates the navigation paths and interaction flows for extraterrestrial users, with special attention to non-linear thinking patterns and multiple sensory feedback loops throughout the transaction process."
  },
  designImages: [
    {
      title: "Color Palette",
      image: "/lovable-uploads/bip-colors.png",
      description: "High-contrast, vibrant colors with bold blues and bright yellows"
    },
    {
      title: "Typography & Layout",
      image: "/lovable-uploads/bip-typography.png",
      description: "Large text elements with circular, open letterforms and substantial weight"
    },
    {
      title: "Interface Elements",
      image: "/lovable-uploads/bip-intarface.png",
      description: "Rounded design language with substantial padding and redundant feedback cues"
    }
  ],
  additionalImages: [
    "/lovable-uploads/bip-group-page.png",
    "/lovable-uploads/bip-home-page.png",
    "/lovable-uploads/bip-loading-page.png",
    "/lovable-uploads/bip-transfer-details.png"
  ],
  process: ["Established alien user personas based on specified perceptual constraints", "Studied existing financial apps and adapted their core functionality to the alien context", "Created wireframes that emphasized visual communication", "Refined the interface through multiple iterations to balance alien-centered design with transaction security", "Designed custom animations for key moments in the user journey for clear feedback"],
  designProcessAndAesthetics: "The Bip money transfer app required a complete reimagining of financial interface conventions for extraterrestrial users. The color palette features high-contrast, vibrant combinations with bold blues and bright yellows against deep space-themed backgrounds. This choice directly addresses the perceptual constraints of the alien users, who struggle with gray tones and low-contrast interfaces.\n\nTypography was a critical consideration—all text elements are significantly larger than human-centered applications, with a minimum size of 14px for secondary information and 18-24px for primary interface elements. Font selection prioritized circular, open letterforms with substantial weight to enhance legibility for alien visual systems.\n\nThe interface employs a consistent rounded design language with substantial padding around interactive elements to accommodate potential differences in alien motor control precision. All buttons feature both color and icon changes in their active states to provide redundant feedback cues. The space-themed iconography replaces traditional financial symbols, creating culturally appropriate visual metaphors for the target users.\n\nInteractive animations play a crucial role in communicating process status, particularly during transaction verification and confirmation. I designed custom animations using principles of anticipation and follow-through to signal the beginning and completion of processes, helping users understand system status without relying on text.",
  case: "Our team reimagined a conventional money transfer app interface through an alien-centered design lens, developing new visual languages, interaction patterns, and information hierarchies suited to extraterrestrial perception.",
  comingSoon: false,
  link: "https://xd.adobe.com/view/866550b7-89fd-4901-92d2-dc087ed5fb28-d336/screen/4d7b2d99-6a21-45fb-b04b-c398d6bedc83/?fullscreen"
}, {
  title: "STUDIT",
  description: "An AI-powered study companion for Israeli Psychometric Entrance Test and matriculation (bagrut) exams preparation with personalized study plans.",
  image: "/lovable-uploads/studit-home-page.png",
  tags: ["Educational Tech", "AI"],
  slug: "studit",
  color: "#F59E0B",
  overview: "Studit is a web-based platform designed to help students prepare for the Israeli Psychometric Entrance Test and matriculation (bagrut) exams. It provides personalized study plans, adaptive practice tests, and scheduling based on diagnostic tests and user preferences.",
  challenge: "Psychometric and matriculation exam preparation is typically stressful, time-consuming, and often inefficient. Many students struggle to structure their study time effectively or identify which areas need the most attention. Existing platforms often present practice questions in a static, uninspiring format that fails to engage students.",
  solution: "Designed by Stav Rakia and Eden Nisoyev, Studit is an interactive, adaptive learning platform that makes studying feel less overwhelming and more engaging. The interface guides users through a complete journey: from selecting their exam date to taking a diagnostic assessment and receiving a personalized study schedule based on their performance and preferences.",
  wireflowDetails: {
    title: "Wireflow",
    image: "/lovable-uploads/studit-wireflow.png",
    description: "The wireframing stage for Studit focused on creating a clear, guided user journey through the exam preparation process. I developed low-fidelity wireframes that mapped out the core journey from exam selection to personalized study plan generation."
  },
  designResearch: {
    title: "Design Research",
    image: "/lovable-uploads/studit-design-research.png",
    description: "Before diving into the design process, I conducted comprehensive research of existing platforms in the test preparation space. This analysis of Israeli market leaders like Yoel Geva, Kidum, and Niv Revach revealed both opportunities and limitations in current offerings.\nFrom Kidum's homepage, I adopted their clear subject emphasis and scroll-prompting arrow, while Yoel Geva's interactive regional map inspired our location selection feature. Studying interactive educational platforms like Wordwall led to the implementation of drag-and-drop functionality for verbal reasoning questions, transforming traditionally static multiple-choice questions into engaging interactive challenges.\nThis competitive analysis uncovered several gaps: most platforms presented practice materials in a visually uninspiring format, lacked meaningful interaction, and failed to personalize the study experience. I noticed that navigation was often confusing and users struggled to understand where they were in the preparation process.\nThese insights directly informed Studit's design approach: creating a step-by-step guided journey with clear progress indicators, implementing interactive question formats, and developing a visually distinctive yet professional aesthetic that stands out from competitors while maintaining educational credibility."
  },
  process: [
    "Conducted extensive research into student pain points during exam preparation", 
    "Analyzed existing educational platforms like Yoel Geva, Kidum, and Niv Revach to identify strengths and weaknesses", 
    "Developed wireframes and user flows that addressed key pain points while introducing interactive elements", 
    "Conducted multiple rounds of user testing to refine the interface", 
    "Created a clean, modern aesthetic with a warm color palette for a calm, focused studying environment"
  ],
  designProcessAndAesthetics: "For Studit, we developed a visual language that balances academic seriousness with engaging interactivity. The color palette features warm neutrals (beiges and soft browns) as a base, accented with muted blues and occasional touches of yellow to create focus points without overwhelming the learning content. This restrained approach creates a calm environment conducive to focused study while providing enough visual interest to maintain engagement.\n\nTypography choices were critical for supporting extended reading periods. We selected Assistant as the primary font for its excellent readability and comprehensive Hebrew character support, with Indie Flower as an accent font for highlighting important elements. Text hierarchy uses weight variation rather than dramatic size differences, with a minimum body text size of 16px to ensure comfortable reading during study sessions.\n\nThe layout employs generous white space and a consistent grid system to organize complex information clearly. Cards with subtle shadows and rounded corners (4px radius) contain related information groups, while interactive elements use slightly more pronounced shadows and state changes to indicate their functionality.\n\nUser flow considerations were paramount, with the interface guiding users through a logical progression from homepage through exam/date selection, location selection, diagnostic assessment and personalized scheduling. Each stage features animated transitions that provide both functional feedback and moments of delight in what could otherwise be a stressful process.",
  challengesAndSolutions: "A significant design challenge emerged in making practice questions interactive without sacrificing academic rigor. Traditional multiple-choice formats felt static and disengaging, but overly gamified approaches risked undermining the serious purpose of the platform. The solution involved developing custom interaction patterns for different question types—drag-and-drop completions for verbal reasoning, interactive maps for selecting exam locations—that enhance engagement while maintaining focus on the academic content.\n\nAnother challenge was designing the scheduling system to feel trustworthy and valuable. Early user testing revealed skepticism about scheduling systems. We addressed this by creating a transparent process that reveals the factors influencing schedule creation and allows users to adjust parameters while still benefiting from optimization. The schedule customization interface went through five iterations before achieving the right balance of guidance and user control.\n\nThe loading screens presented a particular design opportunity—rather than passive waiting periods, we transformed them into micro-moments of encouragement with progress animations and motivational messages. User testing showed this significantly reduced perceived waiting time and helped maintain motivation throughout the assessment process. Additionally, we incorporated color customization for the schedule to help students personalize their study experience.",
  designImages: [{
    title: "Color Palette",
    image: "/lovable-uploads/studit-colors.png",
    description: "Warm neutrals with muted blues and yellow accents"
  }, {
    title: "Typography",
    image: "/lovable-uploads/studit-typography.png",
    description: "Assistant and Indie Flower fonts with weight variations and generous white space"
  }, {
    title: "Interface Components",
    image: "/lovable-uploads/studit-interface.png",
    description: "Cards with subtle shadows and clear visual feedback"
  }],
  additionalImages: ["/lovable-uploads/studit-1.png", "/lovable-uploads/studit-2.png", "/lovable-uploads/studit-3.png", "/lovable-uploads/studit-4.png"],
  link: "https://xd.adobe.com/view/a56c02e8-2d4f-4803-bcbb-811822907cf1-f03f/?fullscreen"
}, {
  title: "PLANT LEARNING MODULE",
  description: "The Plant Learning Module was developed as a learning experience for houseplant care. The primary goal was to increase confidence among potential plant owners by providing comprehensive, accessible information through an interactive learning experience.",
  image: "/lovable-uploads/plant-first-page.png",
  tags: ["Instructional Design", "Educational"],
  slug: "plant-module",
  color: "#22C55E",
  overview: "This e-learning module teaches users how to successfully care for houseplants through engaging, interactive content. The module focuses on six common houseplants, providing detailed care requirements and practical guidance in a user-friendly format.",
  challenge: "Many potential plant owners lack confidence in their ability to properly care for houseplants. This hesitation stems from uncertainty about watering needs, light requirements, and general maintenance. The challenge was to create a learning solution that would effectively build confidence through clear, accessible information and interactive learning experiences.",
  solution: "I designed a comprehensive e-learning module focused on six key houseplants, with detailed care instructions, interactive assessments, and engaging visuals. The module employs a branching navigation model allowing users to personalize their learning journey based on their specific interests. This approach enables learners to focus on plants that match their home environment and lifestyle.",
  wireflow: {
    title: "Wireflow",
    image: "/lovable-uploads/plant-wireflow.png",
    description: "The wireflow demonstrates the module's branching structure, allowing users to navigate through content based on their specific interests. The design includes:\n\nAn introduction section explaining the importance of houseplants\n\nCategory-based navigation allowing users to explore specific plant types\n\nInteractive elements for learning assessment\n\nPractical applications section for real-world implementation"
  },
  specification: {
    title: "Specification & Instructional Script",
    image: "/lovable-uploads/plant-prototyping.png",
    description: "Before entering the design phase, I developed a comprehensive specification document and detailed instructional script. The specification established the pedagogical foundation by defining the behavioral, knowledge, and skill objectives for learners. I conducted a thorough analysis of the target audience, identifying knowledge gaps and learning preferences to inform content organization.\n\nThe instructional script translated these objectives into structured content, using a category-based approach organized around six houseplants. For each plant, I crafted detailed descriptions, care instructions, and contextual scenarios to promote knowledge application. The script incorporated multimodal learning strategies through varied assessment methods, including interactive elements like drag-and-drop activities and scenario-based questions. This instructional planning ensured the learning experience would effectively bridge knowledge gaps while maintaining engagement through thoughtfully paced content progression."
  },
  process: [
    "Analyzing the target audience needs and potential knowledge gaps",
    "Establishing clear learning objectives for each module section",
    "Structuring content in logical categories based on plant types and care requirements",
    "Developing instructional strategies that incorporate interactive elements",
    "Creating opportunities for practical application and knowledge assessment"
  ],
  designProcessAndAesthetics: "For the Plant Learning Module, I designed a visual experience that embodies the natural, organic feel of the subject matter. The color palette centers on various shades of green with earth tones for balance, creating a fresh, clean aesthetic that evokes plant life while maintaining excellent readability.\n\nTypography choices prioritize clarity and accessibility, with the Assistant font family at appropriate sizes for comfortable reading on various devices. Headings use SemiBold weight to maintain visual harmony while creating clear information hierarchy.\n\nThe interface layout employs a grid system that organizes content into digestible sections, with consistent spacing and alignment. Plant images feature prominently throughout the module, serving both instructional and aesthetic purposes. Each plant category uses subtle visual cues to help users track where they are in the learning journey.",
  designImages: [{
    title: "Color Palette",
    image: "/lovable-uploads/plant-colors.png",
    description: "Various shades of green with earth tones for a fresh, natural aesthetic"
  }, {
    title: "Typography",
    image: "/lovable-uploads/plant-typography.png",
    description: "Assistant font family with clear hierarchy and readability"
  }, {
    title: "Interface Elements",
    image: "/lovable-uploads/plant-interface.png",
    description: "Grid-based layout with consistent spacing and visual cues"
  }],
  interactiveElements: {
    title: "Interactive Elements & Assessment",
    description: "The module includes several interactive elements designed to engage learners and reinforce key concepts:\n\nDrag-and-drop activities for matching plants to their ideal light conditions\n\nInteractive quizzes testing knowledge about watering requirements\n\nVisual simulations showing plant responses to different care conditions\n\nProgress tracking to help learners monitor their advancement\n\nThese assessment components go beyond simple recall, requiring users to apply their knowledge in practical scenarios that simulate real-world plant care decisions."
  },
  challengesAndSolutions: "A key challenge was balancing comprehensive plant care information with an approachable, non-overwhelming user experience. Initial feedback indicated that detailed care instructions could intimidate novice plant owners. I addressed this by:\n\nImplementing a layered information architecture that presents essential care details first, with options to expand sections for more detailed information\n\nUsing visual indicators to clearly mark beginner-friendly plants\n\nIncluding reassuring messaging about common plant care mistakes and recovery techniques\n\nAnother challenge was creating effective assessment activities that would genuinely measure understanding rather than simple recall. I developed application-based questions asking users to make decisions about plant placement and care schedules based on specific scenarios, which proved more effective at building confidence than traditional knowledge-checking questions.\n\nThis project demonstrated my ability to transform complex instructional content into an engaging, user-friendly learning experience while addressing specific user needs and learning objectives.",
  additionalImages: [
    "/lovable-uploads/plant-1.png",
    "/lovable-uploads/plant-2.png",
    "/lovable-uploads/plant-3.png",
    "/lovable-uploads/plant-4.png"
  ],
  link: "https://360.articulate.com/review/content/6849bc42-e11b-489d-bcc4-cad07341bdbf/review"
}];

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.slug === slug);
  
  // Find next project data for the navigation section
  const nextProjectIndex = (projectsData.findIndex(p => p.slug === slug) + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];
  
  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-32 relative" style={{
        backgroundColor: `${project.color}10`
      }}>
        <div className="container">
          <motion.button 
            onClick={() => navigate('/projects')} 
            className="flex items-center mb-8 text-muted-foreground hover:text-foreground transition-colors" 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </motion.button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-background text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 
                className="text-4xl md:text-6xl font-medium mb-6" 
                style={{ color: project.color }}
              >
                {project.title}
              </h1>
              
              <p className="text-lg mb-8">
                {project.overview}
              </p>
              
              {project.link && <ProjectLink href={project.link} />}
            </motion.div>
            
            <motion.div 
              className="relative" 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img src={project.image} alt={project.title} className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Challenge & Solution Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-4">The Challenge</h2>
                <p className="text-muted-foreground">
                  {project.challenge}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-4">The Solution</h2>
                <p className="text-muted-foreground">
                  {project.solution}
                </p>
              </motion.div>
            </div>
            
            {/* Design Process Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.5 }} 
              className="mb-16"
            >
              <h2 className="text-2xl font-medium mb-6">Design Process</h2>
              <div className="space-y-4 mb-8">
                {project.process && project.process.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start" 
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div 
                      className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-4 mt-0.5 text-white" 
                      style={{ backgroundColor: project.color }}
                    >
                      {index + 1}
                    </div>
                    <p>{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Design Research Section - For STUDIT project */}
            {project.slug === 'studit' && project.designResearch && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">{project.designResearch.title}</h2>
                <div className="prose prose-lg max-w-none mb-8">
                  {project.designResearch.description.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
                  ))}
                </div>
                
                <div className="rounded-xl overflow-hidden border border-border/40 mt-6">
                  <img 
                    src={project.designResearch.image} 
                    alt="Design Research" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            )}
            
            {/* Wireflow Section - For STUDIT project */}
            {project.slug === 'studit' && project.wireflowDetails && (
              <motion.div
