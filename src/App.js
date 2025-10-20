import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Phone, Mail, MapPin } from 'lucide-react';

const styles = {
  // Global
  appContainer: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: 'white',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
  },

  // Navigation
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    background: 'linear-gradient(to right, #1e3a8a, #581c87)',
    color: 'white',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    zIndex: 50,
  },

  navbarContent: {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  navbarBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    cursor:'pointer'
  },

  logo: {
    width: '3.5rem',
    height: '3.5rem',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#1e3a8a',
  },

  logoText: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    color: '#fbbf24',
  },

 mobileMenuBtn: {
  

  border: 'none',
  color: 'white',
  cursor: 'pointer',
  display: 'none',
  padding: '0.5rem',
  fontFamily: 'Inter, sans-serif',
  transition: 'background-color 0.3s ease, color 0.3s ease',
},

mobileMenuBtnHover: {
  backgroundColor: '#c54c14ff',
  
},

  navLinks: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },

  navLink: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  },

  mobileMenu: {
    backgroundColor: '#1e40af',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    animation: 'slideIn 0.3s ease',
  },

  mobileMenuLink: {
    display: 'block',
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem',
    cursor: 'pointer',
  },

  // Hero Section
  hero: {
    marginTop: '5rem',
    padding: '3rem 1rem 5rem',
    background: 'linear-gradient(to bottom right, #1e3a8a, #6d28d9, #1e3a8a)',
    color: 'white',
    textAlign: 'center',
  },

  heroContent: {
    maxWidth: '80rem',
    margin: '0 auto',
  },

  marqueeBanner: {
    backgroundColor: '#fbbf24',
    color: '#1e3a8a',
    padding: '0.75rem 1rem',
    borderRadius: '2rem',
    border: '4px solid #fde047',
    marginBottom: '1.25rem',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  marqueeText: {
    fontWeight: '700',
    fontSize: '1.125rem',
    whiteSpace: 'normal',
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '1.2',
  },

  heroLogoContainer: {
    width: '8rem',
    height: '8rem',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 2rem',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },

  heroLogoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  teluguText: {
    marginBottom: '2rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fbbf24',
  },

  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },

  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    color: '#dbeafe',
  },

  ctaButton: {
    backgroundColor: '#fbbf24',
    color: '#1e3a8a',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    fontWeight: 'bold',
    fontSize: '1.125rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },

  // Section Container
  sectionContainer: {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem',
  },

  sectionTitle: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '4rem',
    color: '#1e3a8a',
  },

  // Services Section
  servicesSection: {
    padding: '6rem 1rem',
    backgroundColor: '#f9fafb',
  },

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },

  serviceCard: (color) => ({
    borderRadius: '1rem',
    padding: '2rem',
    color: 'white',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    background: color,
  }),

  serviceCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
  },

  serviceIcon: {
    fontSize: '3.75rem',
    marginBottom: '1rem',
  },

  serviceTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },

  toggleBtn: (bgColor = 'rgba(255, 255, 255, 0.2)') => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: bgColor,
    color: 'inherit',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontSize: '0.875rem',
    fontWeight: '600',
  }),

  contentText: {
    marginTop: '1.5rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
    fontSize: '0.875rem',
    lineHeight: '1.625',
    maxHeight: '24rem',
    overflowY: 'auto',
  },

  contentTextTherapy: {
    marginTop: '1.5rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #bfdbfe',
    fontSize: '0.875rem',
    lineHeight: '1.625',
    maxHeight: '24rem',
    overflowY: 'auto',
    color: '#374151',
  },

  // Therapies Section
  therapiesSection: {
    padding: '6rem 1rem',
    backgroundColor: 'white',
  },

  therapiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },

  therapyCard: {
    background: 'linear-gradient(to bottom right, #f0f9ff, #f3e8ff)',
    border: '2px solid #bfdbfe',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    cursor: 'pointer',
  },

  therapyCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
    borderColor: '#60a5fa',
  },

  therapyIcon: {
    fontSize: '3.125rem',
    marginBottom: '1rem',
  },

  therapyTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: '1rem',
  },

  therapyToggleBtn: {
    backgroundColor: '#bfdbfe',
    color: '#1e3a8a',
  },

  // Why Section
  whySection: {
    padding: '6rem 1rem',
    background: 'linear-gradient(to right, #fef3c7, #fed7aa)',
  },

  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },

  whyCard: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    borderLeft: '4px solid #60a5fa',
  },

  whyCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
  },

  whyIcon: {
    fontSize: '3.125rem',
    marginBottom: '1rem',
  },

  whyTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: '1rem',
  },

  whyToggleBtn: {
    backgroundColor: '#dbeafe',
    color: '#1e3a8a',
  },

  whyContent: {
    marginTop: '1.5rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #d1d5db',
    fontSize: '0.875rem',
    lineHeight: '1.625',
    maxHeight: '24rem',
    overflowY: 'auto',
    color: '#374151',
  },

  // Contact Section
  contactSection: {
    padding: '6rem 1rem',
    background: 'linear-gradient(to right, #1e3a8a, #581c87)',
    color: 'white',
  },

  contactTitle: {
    color: 'white',
  },

  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },

  contactCard: {
    backgroundColor: '#1e40af',
    padding: '2rem',
    borderRadius: '1rem',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
  },

  contactCardHover: {
    transform: 'scale(1.1)',
    backgroundColor: '#1e3a8a',
  },

  contactIcon: {
    color: '#fbbf24',
    marginBottom: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  contactCardH3: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },

  contactCardP: {
    fontSize: '1.125rem',
    fontWeight: '600',
  },

  mapsLink: {
    color: '#fbbf24',
    fontSize: '0.875rem',
    marginTop: '0.5rem',
  },

  // Footer
  footer: {
    backgroundColor: '#172554',
    color: 'white',
    padding: '1rem 0.1px',
    marginBottom:'2px',

    textAlign: 'center',
  },

  footerP: {
    marginBottom: '2px',
    paddingTop:'2px'
  },

  registration: {
    color: '#fbbf24',
  },

  tagline: {
    fontSize: '0.875rem',
    color: '#d1d5db',
    marginTop: '1rem',
  },

  founderSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '80rem',
    margin: '1rem auto 0',
    gap: '2rem',
    paddingTop: '1rem',
  },

  founderCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    flex: 1,
  },

  founderImage: {
    width: '13rem',
    height: '13rem',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #fbbf24',
  },

  founderName: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
  },

  founderTitle: {
    fontSize: '2rem',
    color: '#fbbf24',
    fontWeight: '600',
    paddingTop:'0.01px'
  },
};

const serviceGradients = {
  blue: 'linear-gradient(to bottom right, #60a5fa, #2563eb)',
  purple: 'linear-gradient(to bottom right, #c084fc, #9333ea)',
  red: 'linear-gradient(to bottom right, #f87171, #dc2626)',
  green: 'linear-gradient(to bottom right, #4ade80, #16a34a)',
  yellow: 'linear-gradient(to bottom right, #facc15, #ca8a04)',
  cyan: 'linear-gradient(to bottom right, #22d3ee, #0891b2)',
};

export default function GoldenWings() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const [expandedTherapy, setExpandedTherapy] = useState(null);
  const [expandedWhy, setExpandedWhy] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const total = 4;
    const interval = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const serviceContent = {
  autism: `Autism Spectrum Disorder (ASD) is a complex neurodevelopmental condition that affects social interaction, communication, and behavior. At Golden Wings, we understand that autism is not a single condition but a wide spectrum — every child presents unique strengths, challenges, and patterns of development. No two children with autism are the same, and that is why our approach is built around personalization, patience, and progress.

Children with autism may face challenges in understanding social cues, expressing emotions, maintaining eye contact, or adapting to changes in their environment. However, they often demonstrate extraordinary strengths such as strong memory, creativity, attention to detail, and exceptional focus in areas of interest. At Golden Wings, our goal is to nurture these abilities while supporting areas that require development.

**Our Approach:**  
We utilize evidence-based interventions including **Applied Behavior Analysis (ABA)**, **Social Stories**, **visual supports**, **structured teaching (TEACCH)**, and **sensory integration techniques**. Each child receives a personalized assessment to identify their specific strengths, learning preferences, and developmental challenges.

Our therapy sessions are structured yet flexible, designed to build communication, improve daily living skills, encourage social engagement, and reduce behavioral difficulties. We incorporate **speech therapy**, **occupational therapy**, and **behavioral therapy** within our autism program to ensure all aspects of growth are addressed.

**Parental Involvement:**  
Parents play a crucial role in our program. We train parents to continue structured activities at home and to understand the unique ways their child communicates and learns.

At Golden Wings, we celebrate neurodiversity. We believe autism is not a limitation but a different way of experiencing the world. With the right guidance, children with ASD can learn, grow, and lead fulfilling, independent lives.`,

  adhd: `Attention-Deficit/Hyperactivity Disorder (ADHD) is a common neurodevelopmental condition characterized by patterns of inattention, impulsivity, and hyperactivity that interfere with daily functioning, learning, and relationships. At Golden Wings, we recognize that ADHD affects every individual differently — and our mission is to help children and families understand and manage these challenges effectively.

Children with ADHD may have trouble focusing on tasks, organizing their work, following instructions, or sitting still for long periods. However, they also possess remarkable creativity, enthusiasm, and energy when guided properly. Our team focuses on channeling these strengths into productive learning experiences.

**Comprehensive Assessment:**  
Our experts conduct detailed assessments to understand each child’s profile. We evaluate attention span, impulse control, executive functioning, emotional regulation, social interaction, and academic performance. Through clinical observation, standardized tests, and collaboration with parents and teachers, we identify each child’s specific needs.

**Therapeutic Interventions:**  
Golden Wings uses a combination of **behavior therapy**, **cognitive-behavioral techniques**, **occupational therapy**, and **parent management training**. We teach self-regulation strategies, organization skills, and structured goal-setting. Visual schedules, movement breaks, and reinforcement systems help children stay engaged and focused.

**School Collaboration:**  
We coordinate with educators to implement classroom strategies that support attention and reduce distractions. Our goal is to help children with ADHD not just manage symptoms but thrive academically and emotionally.

We firmly believe that with understanding, structure, and consistent support, children with ADHD can transform restlessness into resilience and impulsivity into innovation.`,

  behavior: `Behavioral challenges in children can arise from various causes — emotional distress, developmental delays, trauma, environmental stressors, neurological conditions, or learned responses. At Golden Wings, we view behavior as a form of communication. Instead of labeling children as “difficult,” we strive to understand *why* the behavior occurs and *what* it is trying to express.

**Behavioral Assessment:**  
We conduct comprehensive **Functional Behavior Assessments (FBA)** to identify triggers (antecedents), the behavior itself, and the consequences that maintain it. This helps us understand the root cause and develop targeted intervention plans that address underlying needs rather than just surface symptoms.

**Our Interventions Include:**  
- **Positive Behavior Support (PBS):** Encouraging desired behavior through consistent reinforcement.  
- **Social Skills Training:** Teaching emotional expression, cooperation, and empathy.  
- **Self-Regulation Techniques:** Helping children recognize emotions and use coping strategies.  
- **Parental Training:** Equipping parents with tools to manage and guide behavior calmly and effectively.

Each plan is customized to promote emotional growth, impulse control, and respectful communication. Our therapists maintain close collaboration with families to ensure consistency across home and school environments.

At Golden Wings, we believe every challenging behavior is an opportunity for learning and healing. Through patience, structure, and empathy, we help children develop self-awareness, confidence, and positive social connections.`,

  earlyinterventionprogram: `The Early Intervention Program at Golden Wings is designed to identify and support children who show developmental delays or special needs at an early age — typically from birth to 6 years. This critical window of development offers the greatest potential for progress, as the brain is most adaptable during early childhood.

**Our Philosophy:**  
We believe that early support can make a lifetime of difference. When children receive the right guidance early, they can overcome obstacles and build the foundation for lifelong learning and independence.

**Areas of Focus:**  
Our multidisciplinary team addresses all developmental domains, including:
- **Communication:** Early speech and language development.  
- **Motor Skills:** Strength, coordination, and balance.  
- **Social and Emotional Skills:** Building confidence, interaction, and play skills.  
- **Cognitive Development:** Problem-solving, attention, and early learning.  
- **Self-Help Skills:** Eating, dressing, and toileting.

**Our Process:**  
We start with developmental screening and standardized assessments to identify delays. Based on the findings, we create individualized intervention plans involving speech therapy, occupational therapy, sensory integration, and parent training.

**Parental Role:**  
We train parents to continue therapy strategies at home through play-based learning and positive reinforcement. Parents become active participants in their child’s developmental journey.

Our Early Intervention Program helps children achieve milestones, gain independence, and prepare successfully for preschool and social life — giving them the wings to fly early.`,

  learning: `Learning disabilities are neurological differences that affect how the brain processes, stores, and retrieves information. They are not related to intelligence; in fact, many children with learning disabilities have average or above-average IQ. However, they may face persistent challenges in reading, writing, spelling, or mathematics, which can lead to frustration, low self-esteem, or academic struggles.

At Golden Wings, our mission is to help each child unlock their potential through specialized instruction, compassionate understanding, and continuous encouragement.

**Comprehensive Assessment:**  
Our team conducts psychoeducational evaluations to identify specific learning disorders such as **dyslexia (reading disorder)**, **dysgraphia (writing difficulties)**, or **dyscalculia (math challenges)**. We assess cognitive strengths, working memory, auditory and visual processing, and problem-solving skills.

**Customized Learning Plans:**  
Based on the results, we create an individualized educational program that matches each child’s learning style. We use **multisensory teaching methods** such as visual aids, hands-on activities, and repetition to improve retention and understanding.

**Supportive Environment:**  
Children receive one-on-one or small group instruction in a patient, nurturing setting. We collaborate with parents and schools to ensure consistent strategies across environments.

Our goal is not only academic improvement but also the restoration of confidence and curiosity. At Golden Wings, we remind every child that learning differently does not mean learning less — it simply means learning in their own unique way.`,

  developmental: `Developmental delay refers to a significant lag in achieving age-appropriate milestones across one or more domains such as physical, cognitive, communication, social-emotional, or adaptive skills. Early identification and intervention are essential for optimal growth and functioning.

At Golden Wings, we offer comprehensive evaluation and therapy services to help children catch up to their peers and reach their fullest potential.

**Early Identification:**  
Our specialists conduct detailed developmental screenings and standardized assessments to evaluate strengths and challenges across all domains. We consider both medical and environmental factors that may influence development.

**Holistic Interventions:**  
Once a delay is identified, we create a customized therapy plan that may include **speech therapy**, **occupational therapy**, **physiotherapy**, **play therapy**, and **parental guidance**. Each session is designed to be engaging, goal-oriented, and age-appropriate.

**Family-Centered Care:**  
Parents are integral partners in therapy. We empower families with strategies to encourage development at home through structured play, communication exercises, and positive reinforcement.

Our aim is to ensure that every child — regardless of the delay — receives the right guidance, nurturing, and encouragement to flourish. Developmental therapy at Golden Wings is a promise that every child will be given the opportunity to grow, learn, and thrive at their own pace.`
};


  const therapyContent = {
  speech: `Speech and language therapy is a specialized clinical service designed to assess, diagnose, and treat communication and swallowing disorders in both children and adults. At Golden Wings Rehabilitation Center, our certified Speech-Language Pathologists (SLPs) provide evidence-based and compassionate therapy tailored to each individual’s needs.

Speech therapy focuses on improving communication skills, articulation, fluency, and language comprehension. Our therapists use interactive, engaging, and age-appropriate techniques to make each session enjoyable and effective. The goal is not only to help clients communicate clearly, but also to boost their self-confidence, social participation, and emotional well-being.

We address a wide range of speech and language challenges, including:
Articulation Disorders:** Difficulty producing certain sounds correctly.
Fluency Disorders:** Stuttering or interruptions in the flow of speech.
Voice Disorders:** Problems with pitch, volume, or vocal quality.
- **Language Delays:** Challenges in understanding or expressing ideas.
- **Social Communication Issues:** Difficulty with conversational skills or understanding social cues.
- **Feeding and Swallowing Disorders:** Trouble with chewing, swallowing, or feeding behaviors.

Our team begins with a detailed evaluation using standardized tools to identify the specific needs of the child or adult. Based on the assessment, we create a personalized treatment plan that includes structured exercises, play-based learning, and parental involvement.

**Language Development:**  
Language development plays a key role in academic success and social growth. We focus on improving vocabulary, sentence structure, comprehension, and verbal expression. Using storytelling, visual cues, and interactive activities, we help children and adults strengthen both receptive and expressive language abilities.

**Parent and Caregiver Training:**  
Since communication extends beyond the therapy room, we guide parents and caregivers with strategies to support speech and language development at home. This partnership ensures faster progress and better carryover of skills in real-life settings.

At Golden Wings, our mission is to empower each individual with the ability to express themselves confidently — because every voice deserves to be heard.`,
  
  occupational: `Occupational Therapy (OT) at Golden Wings focuses on helping individuals of all ages achieve independence and confidence in everyday life. It is not just about therapy — it’s about rebuilding purpose, participation, and performance in the activities that matter most.

Our Occupational Therapists are highly trained professionals who assess physical, sensory, cognitive, and emotional challenges that may interfere with daily functioning. We provide structured interventions that promote skill development, sensory regulation, and adaptive coping mechanisms.

**Key Focus Areas:**
- **Fine Motor Skills:** Essential for tasks such as writing, buttoning clothes, or handling small objects. We use engaging games and exercises to improve hand-eye coordination, dexterity, and muscle strength.
- **Gross Motor Skills:** Activities that enhance balance, posture, and movement for overall body coordination.
- **Sensory Integration Therapy:** For children with sensory processing difficulties, we design calming and stimulating experiences that help them respond appropriately to sensory input.
- **Self-Care and Daily Living Skills:** From eating and dressing to grooming and toileting, our programs build independence in daily routines.
- **Cognitive and Attention Training:** We incorporate memory games, sequencing tasks, and problem-solving exercises to enhance executive functioning and attention span.

Our therapeutic sessions take place in a well-equipped environment designed to stimulate creativity, motivation, and fun. Through activities like obstacle courses, art, play-based exercises, and adaptive learning tools, we make therapy enjoyable and goal-oriented.

We also emphasize **family involvement**, as parents play a vital role in supporting skill development outside therapy hours. Each child’s progress is reviewed periodically to modify the goals as they grow and advance.

At Golden Wings, we believe that occupational therapy is more than rehabilitation — it’s about **helping individuals live life to the fullest**. Every small milestone, from holding a pencil to tying shoelaces independently, marks a victory in the journey of growth and self-reliance.`,
  
  behavior: `Behavior therapy at Golden Wings is a science-driven and compassionate approach to understanding and shaping behavior. It is based on the principles of learning theory, emphasizing how behavior is influenced by environment, reinforcement, and motivation.

Our goal is not just to reduce unwanted behaviors but to replace them with positive, adaptive ones. Behavior therapy benefits children with autism spectrum disorder (ASD), ADHD, anxiety, developmental delays, and behavioral challenges.

**Applied Behavior Analysis (ABA):**
ABA is one of the most effective and evidence-based approaches in behavioral therapy, especially for children on the autism spectrum. Our Board Certified Behavior Analysts (BCBAs) design individualized programs that focus on improving communication, social interaction, academic performance, and daily living skills.

**Key Techniques We Use:**
- **Positive Reinforcement:** Rewarding desired behaviors to encourage repetition.
- **Task Analysis:** Breaking down complex activities into manageable steps.
- **Functional Behavior Assessment (FBA):** Identifying triggers and patterns behind behaviors.
- **Social Skills Training:** Teaching children how to interact, share, and express emotions appropriately.
- **Parent Behavior Training:** Empowering parents with tools to manage behavior effectively at home.

Each therapy plan is customized after thorough observation and assessment. We maintain detailed progress tracking to ensure measurable improvements. Our therapists focus on promoting independence, cooperation, and confidence in social and learning environments.

Beyond structured sessions, we incorporate real-life practice through play therapy, group interactions, and community-based learning experiences. These help children generalize new skills in different situations.

Behavior therapy at Golden Wings is not about controlling children — it’s about **understanding their world**, helping them express themselves, and guiding them toward self-regulation, empathy, and lifelong success.`,
  
  specialeducation: `At Golden Wings Child Development Center and Inclusive Special School, we hold a firm belief that **every child is capable of learning, growing, and thriving**, regardless of physical, intellectual, emotional, or learning differences. Our Special Education Program is a place where diversity is celebrated, and inclusion is the foundation of learning.

We understand that each child’s needs are unique. That’s why we design **Individualized Education Plans (IEPs)** for every student, ensuring that academic, therapeutic, and emotional goals align perfectly with their personal capabilities. Our team of special educators, therapists, psychologists, and counselors collaborate to provide holistic support for every learner.

**Our Core Focus Areas:**
- Academic skill-building in literacy, numeracy, and comprehension.
- Life skill training to promote independence in self-care and social participation.
- Behavior management strategies for positive classroom engagement.
- Emotional and social skill development through group learning and creative arts.
- Adaptive learning tools to enhance understanding and memory.

We cater to children with autism, ADHD, intellectual disabilities, learning disorders, cerebral palsy, Down syndrome, and other developmental challenges. Each child is taught at their own pace using a blend of visual, auditory, tactile, and kinesthetic learning techniques.

**Inclusive Education Philosophy:**  
Our environment encourages children of all abilities to learn together, fostering empathy, cooperation, and mutual respect. We believe that inclusion enriches everyone — both children with and without special needs — by promoting acceptance and understanding from an early age.

**Therapeutic Integration:**  
The program is complemented by therapies such as occupational therapy, speech therapy, and behavior modification sessions. This ensures not only academic progress but also emotional stability and functional independence.

**Parent Partnership:**  
Parents are active participants in our educational process. We conduct regular progress meetings, workshops, and home-based program training to strengthen consistency between school and home learning.

**Our Goal:**  
To nurture confident, curious, and capable individuals who can navigate life with dignity and self-belief. Special Education at Golden Wings is not limited to classrooms — it’s a lifelong commitment to empowering children to reach their highest potential.

At Golden Wings, we don’t see disabilities — we see **possibilities**. Every child is a promise of hope, and we are here to help them spread their wings and soar beyond limitations.`
};


  const whyContent = {
    facilities: "Golden Wings features state-of-the-art facilities specifically designed to support child development and learning. Our sensory-friendly classrooms are equipped with adjustable lighting, quiet areas, and carefully curated sensory tools.",
    personalized: "Every child at Golden Wings receives a personalized care plan developed through comprehensive assessment and collaboration with families. We begin with thorough evaluations across all developmental domains.",
    proven: "Golden Wings has established a proven track record of success in supporting children with diverse developmental and learning needs. Our data-driven approaches ensure that every intervention is based on systematic measurement and analysis.",
    family: "Family support and involvement are cornerstones of Golden Wings' philosophy. We recognize that parents and caregivers are the primary advocates and support system for their children."
  };

  const services = [
    { id: 'autism', title: 'Autism', icon: '🧩', color: 'blue' },
    { id: 'adhd', title: 'ADHD', icon: '⚡', color: 'purple' },
    { id: 'behavior', title: 'Behavior Issues', icon: '🎯', color: 'red' },
    { id: 'earlyinterventionprogram', title: 'early intervention program', icon: '🪴', color: 'green' },
    { id: 'learning', title: 'Learning Disability', icon: '📚', color: 'yellow' },
    { id: 'developmental', title: 'Developmental Delay', icon: '🌱', color: 'cyan' }
  ];

  const therapies = [
    { id: 'speech', title: 'Speech Therapy', icon: '🗣' },
    { id: 'occupational', title: 'Occupational Therapy', icon: '🤝' },
    { id: 'behavior', title: 'Behavior Therapy', icon: '🧠' },
    {id:'specialeducation',title:'Special Education',icon:'🎓'}
  ];

  const whyItems = [
    { id: 'facilities', title: 'State-of-the-Art Facilities', icon: '🏥' },
    { id: 'personalized', title: 'Personalized Care Plans', icon: '❤️' },
    { id: 'proven', title: 'Proven Track Record', icon: '🏆' },
    { id: 'family', title: 'Family Support Programs', icon: '👨‍👩‍👧‍👦' }
  ];

  return (
    <div style={styles.appContainer}>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* marquee animation removed - banner is static for better UX */
      `}</style>

      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navbarContent}>
          <div style={styles.navbarBrand}>
            <div style={styles.logo}>GW</div>
            <span style={styles.logoText}>Golden Wings</span>
          </div>
          <button
            style={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div style={styles.navLinks}>
            <a href="#services" style={styles.navLink}>Services</a>
            <a href="#therapies" style={styles.navLink}>Therapies</a>
            <a href="#why" style={styles.navLink}>Why Us</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </div>
        </div>
        {mobileMenuOpen && (
          <div style={styles.mobileMenu}>
            <a href="#services" style={styles.mobileMenuLink}>Services</a>
            <a href="#therapies" style={styles.mobileMenuLink}>Therapies</a>
            <a href="#why" style={styles.mobileMenuLink}>Why Us</a>
            <a href="#contact" style={styles.mobileMenuLink}>Contact</a>
          </div>
        )}
      </nav>
        
      {/* Hero Section - 4-slide background carousel */}
      <section style={{ ...styles.hero, padding: 0, overflow: 'hidden' }}>
        <div style={{ position: 'relative', height: '520px' }}>
          <style>{`
            .gw-carousel { position: relative; height: 100%; width: 100%; }
            .gw-slide { position: absolute; inset: 0; background-size: cover; background-position: center; background-repeat: no-repeat; transition: opacity 0.8s ease; }
            .gw-slide--hidden { opacity: 0; pointer-events: none; }
            .gw-slide--visible { opacity: 1; pointer-events: auto; }
            .gw-slide::before { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45)); }
            .gw-hero-content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; z-index: 5; text-align: center; padding: 2rem; }
            .gw-carousel-controls { position: absolute; bottom: 1rem; left: 50%; transform: translateX(-50%); display:flex; gap:0.5rem; z-index:6 }
            .gw-dot { width:12px; height:12px; border-radius:50%; background: rgba(255,255,255,0.6); cursor:pointer; border: none; }
            .gw-dot.active { background: #fbbf24; }
            @media (max-width: 640px){ .gw-hero-content { padding: 1rem; } }
          `}</style>

          <div className="gw-carousel" aria-roledescription="carousel">
            {/* React-controlled slides */}
            {
              (() => {
                const imgUrls = [
                  process.env.PUBLIC_URL + '/class1.jpg',
                  process.env.PUBLIC_URL + '/class2.jpg',
                  process.env.PUBLIC_URL + '/class3.jpg',
                  process.env.PUBLIC_URL + '/exactclass1.jpg'
                ];
                return imgUrls.map((url, i) => (
                  <div
                    key={i}
                    className={"gw-slide " + (i === currentSlide ? 'gw-slide--visible' : 'gw-slide--hidden')}
                    style={{ backgroundImage: `url(${url})` }}
                    data-index={i}
                  />
                ));
              })()
            }

            {/* Hero content (overlayed) */}
            <div className="gw-hero-content">
              <div style={styles.marqueeBanner}>
                <p style={styles.marqueeText}>
                  Golden Wings Child Development Center and Inclusive Special School
                </p>
              </div>

              <div style={styles.heroLogoContainer}>
                <img 
                  src={process.env.PUBLIC_URL + '/logo.jpg'}
                  alt="Golden Wings Logo"
                  style={styles.heroLogoImg}
                />
              </div>

              <div style={styles.teluguText}>
                గోల్డెన్ వింగ్స్ బాల అభివృద్ధి కేంద్రం మరియు సమగ్ర ప్రత్యేక పాఠశాల
              </div>

              <h1 style={styles.heroTitle}>Golden Wings</h1>
              <p style={styles.heroSubtitle}>Nurturing Every Child's Potential</p>
              <button style={styles.ctaButton} onMouseOver={(e) => e.target.style.backgroundColor = '#f59e0b'} onMouseOut={(e) => e.target.style.backgroundColor = '#fbbf24'}>
                Schedule a Visit
              </button>
            </div>

            {/* Controls (dots) - React will manage classes */}
            <div className="gw-carousel-controls">
              {[0,1,2,3].map((i) => (
                <button
                  key={i}
                  className={"gw-dot " + (i === currentSlide ? 'active' : '')}
                  aria-label={`Slide ${i+1}`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.servicesSection}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>Our Services (మా సేవలు)</h2>
          <div style={styles.servicesGrid}>
            {services.map((service, idx) => (
              <div
                key={idx}
                style={styles.serviceCard(serviceGradients[service.color])}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={styles.serviceIcon}>{service.icon}</div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>

                <button
                  style={styles.toggleBtn()}
                  onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                >
                  {expandedService === idx ? 'Show Less' : 'Show More'}
                  {expandedService === idx ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {expandedService === idx && (
                  <div style={styles.contentText}>
                    {serviceContent[service.id]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapies Section */}
      <section id="therapies" style={styles.therapiesSection}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>Therapeutic Services (చికిత్సా సేవలు)</h2>
          <div style={styles.therapiesGrid}>
            {therapies.map((therapy, idx) => (
              <div
                key={idx}
                style={styles.therapyCard}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={styles.therapyIcon}>{therapy.icon}</div>
                <h3 style={styles.therapyTitle}>{therapy.title}</h3>

                <button
                  style={styles.toggleBtn(styles.therapyToggleBtn.backgroundColor)}
                  onClick={() => setExpandedTherapy(expandedTherapy === idx ? null : idx)}
                >
                  {expandedTherapy === idx ? 'Show Less' : 'Show More'}
                  {expandedTherapy === idx ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {expandedTherapy === idx && (
                  <div style={styles.contentTextTherapy}>
                    {therapyContent[therapy.id]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" style={styles.whySection}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>Why Choose Golden Wings</h2>
          <div style={styles.whyGrid}>
            {whyItems.map((item, idx) => (
              <div
                key={idx}
                style={styles.whyCard}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={styles.whyIcon}>{item.icon}</div>
                <h3 style={styles.whyTitle}>{item.title}</h3>

                <button
                  style={styles.toggleBtn(styles.whyToggleBtn.backgroundColor)}
                  onClick={() => setExpandedWhy(expandedWhy === idx ? null : idx)}
                >
                  {expandedWhy === idx ? 'Show Less' : 'Show More'}
                  {expandedWhy === idx ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {expandedWhy === idx && (
                  <div style={styles.whyContent}>
                    {whyContent[item.id]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.sectionContainer}>
          <h2 style={{ ...styles.sectionTitle, ...styles.contactTitle }}>Get In Touch</h2>
          <div style={styles.contactGrid}>
            <button
              style={styles.contactCard}
              onClick={() => window.open('https://wa.me/9390354098', '_blank')}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Phone size={50} style={styles.contactIcon} />
              <h3 style={styles.contactCardH3}>WhatsApp</h3>
              <p style={styles.contactCardP}>9390354098</p>
            </button>

            <a
              href="mailto:info@goldenwings.edu.in"
              style={styles.contactCard}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Mail size={50} style={styles.contactIcon} />
              <h3 style={styles.contactCardH3}>Email</h3>
              <p style={styles.contactCardP}>info@goldenwings.edu.in</p>
            </a>

            <button
              style={styles.contactCard}
              onClick={() => window.open('https://maps.google.com/?q=4-7-84/2+opp+Vinayak+Nagar+Hyderabad', '_blank')}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <MapPin size={50} style={styles.contactIcon} />
              <h3 style={styles.contactCardH3}>Location</h3>
              <p style={styles.contactCardP}>4-7-84/2, opp. Vinayak Nagar</p>
              <p style={styles.mapsLink}>Open in Maps</p>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerP}>© 2025 Golden Wings. All rights reserved.</p>
        <p style={styles.registration}>Reg. No: 1055/2025</p>
        <p style={styles.tagline}>Nurturing Every Child's Potential</p>
        
        <div style={styles.founderSection}>
          <div style={styles.founderCard}>
            <img 
              src="\founder.jpg"
              alt="."
              style={styles.founderImage}
            />
            <p style={styles.founderName}>Mr. G.Mallikarjun (Founder)</p>
            
          </div>
          
          <div style={styles.founderCard}>
            <img 
              src="\cofounder.jpg"
              alt="."
              style={styles.founderImage}
            />
            <p style={styles.founderName}>Mr. N. Anvesh (Co-Founder)</p>
 
          </div>
        </div>
      </footer>
    </div>
  );
}