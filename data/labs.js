const LABS_DATA = [
  {
    "name": "Radar Sensing Lab",
    "icon": "📡",
    "tags": [
      "Signal processing for automotive radars",
      "Medical radar applications",
      "Human activity recognition",
      "Radar imaging",
      "ISAC"
    ],
    "faculty": [
      {
        "name": "Vinod Veera Reddy",
        "email": "vinod.reddy@iiitb.ac.in"
      }
    ],
    "description": "Radar Sensing Lab works in the broad spectrum of applications of radar, with a focus on automotive, medical, and communication applications. The lab leverages off-the-shelf radars to explore new problems, collaborates closely with industry, and is open to partnerships with universities and government organizations."
  },
  {
    "name": "CSSMP (Complex Systems & Soft Matter Physics)",
    "icon": "🌊",
    "tags": [
      "Complex systems",
      "Nonlinear dynamics",
      "Soft matter physics",
      "Quantum computing (aspects)"
    ],
    "faculty": [
      {
        "name": "Balakrishnan Ashok",
        "email": "bashok@iiitb.ac.in"
      }
    ],
    "description": "The CSSMP group conducts interdisciplinary theoretical research in nonlinear dynamics, soft matter and complex fluids, physics of living systems, modeling of complex systems at different scales, and aspects of quantum computing."
  },
  {
    "name": "Multimodal Perception Lab",
    "icon": "👁️‍🗨️",
    "tags": [
      "Multimodal conversational systems",
      "Applied computer vision"
    ],
    "faculty": [
      {
        "name": "Dinesh Babu J",
        "email": "jdinesh@iiitb.ac.in"
      }
    ],
    "description": "The Multimodal Perception Lab focuses on human-centered sensing and multimodal signal processing to observe, measure, and model human behavior, enabling applications such as behavioral training and human-agent interactions."
  },
  {
    "name": "3D Vision and Language Lab",
    "icon": "🧊",
    "tags": [
      "Few-shot object segmentation",
      "CAD-based object part segmentation",
      "Generative AI for 3D vision",
      "Language-guided 3D exploration"
    ],
    "faculty": [
      {
        "name": "Viswanath Gopalakrishnan",
        "email": "viswanath.g@iiitb.ac.in"
      }
    ],
    "description": "This lab focus on recognition problems involving objects in 3D world and language guided exploration in 3D environments."
  },
  {
    "name": "Web Science Lab",
    "icon": "🌐",
    "tags": [
      "AI systems and ethics",
      "Multi-agent systems",
      "Natural language processing",
      "Network science",
      "Conceptual modeling"
    ],
    "faculty": [
      {
        "name": "Srinath Srinivasa",
        "email": "sri@iiitb.ac.in"
      },
      {
        "name": "Sushree Behera",
        "email": "sushree.behera@iiitb.ac.in"
      }
    ],
    "description": "The Web Science Lab studies how the Internet, the Web, and AI affect different facets of human life, including business, administration, social well-being, education, and personal relationships. It is part of the global Web Science Trust Network and engages in digital empowerment initiatives."
  },
  {
    "name": "Graphics-Visualization-Computing Lab (GVCL)",
    "icon": "🖼️",
    "tags": [
      "Spatial analytics",
      "3D reconstruction", 
      "Natural hazards",
      "Climate change",
      "Population surveys," 
      "Eye tracking",
      "Reverse engineering visualizations",
    ],
    "faculty": [
      {
        "name": "Jaya Sreevalsan Nair",
        "email": "jaya@iiitb.ac.in"
      },
    ],
    "description": "GVCL, founded by Prof. Jaya Sreevalsan-Nair in 2011, is an interdisciplinary lab focused on visual analytics and spatial computing. We develop data models and visualization techniques for spatio-temporal and multivariate data, leveraging tensors, matrices, and complex networks. Collaborating with domain experts, we create innovative solutions for GIS, biology, medicine, and survey analytics."
  },
  {
    "name": "Networking and Communication Research Lab (NCRL)",
    "icon": "📶",
    "tags": [
      "5G/6G networks",
      "Network slicing",
      "IoT",
      "Massive MIMO",
      "Intelligent Reflecting Surfaces"
    ],
    "faculty": [
      {
        "name": "Debabrata Das",
        "email": "dDas@iiitb.ac.in"
      },
      {
        "name": "Jyotsna Bapat",
        "email": "jbapat@iiitb.ac.in"
      },
      {
        "name": "Amrita Mishra",
        "email": "amrita.mishra@iiitb.ac.in"
      }
    ],
    "description": "NCRL focuses on R&D related to 5G, 6G, and wireless networks, including network slicing, IoT security, QoS/QoE enhancement, Massive MIMO, UAVs, and Intelligent Reflecting Surfaces."
  },
  {
    "name": "Graph-Geometry-Topology Lab (GGTL)",
    "icon": "📐",
    "tags": [
      "Algorithmic graph theory",
      "Computational geometry",
      "Computational topology",
      "Topological data analysis",
      "Approximation algorithms"
    ],
    "faculty": [
      {
        "name": "Pradeesha Ashok",
        "email": "Pradeesha@iiitb.ac.in"
      },
      {
        "name": "Amit Chattopadhyay",
        "email": "a.chattopadhyay@iiitb.ac.in"
      }
    ],
    "description": "GGTL explores fundamental problems in algorithmic graph theory, computational geometry, and computational topology, with applications in topological data analysis, robotics, networks, and wireless communication."
  },
  {
    "name": "Scalable Data Science and AI (ScaDS.ai) Lab",
    "icon": "🧠",
    "tags": [
      "Big data systems",
      "Neuro-symbolic AI",
      "Explainable AI",
      "Streaming data systems",
      "Knowledge graphs"
    ],
    "faculty": [
      {
        "name": "Vinu Ellampallil Venugopal",
        "email": "vinu.ev@iiitb.ac.in"
      }
    ],
    "description": "The ScaDS Lab develops scalable solutions for big data challenges, focusing on neuro-symbolic AI for enhanced reasoning and distributed streaming data systems for efficient event processing."
  },
  {
    "name": "Speech Lab",
    "icon": "🎙️",
    "tags": [
      "Automatic speech recognition",
      "Multilingual ASR",
      "Few-shot learning",
      "Self-supervised learning",
      "Deep learning for speech"
    ],
    "faculty": [
      {
        "name": "V. Ramasubramanian",
        "email": "v.ramasubramanian@iiitb.ac.in"
      }
    ],
    "description": "The Speech Lab focuses on automatic speech recognition, particularly for Indian languages, exploring end-to-end ASR, attention mechanisms, few-shot learning, self-supervised learning, and multilingual speech systems."
  },
  {
    "name": "Robotics Studio",
    "icon": "🤖",
    "tags": [
      "Multi-robot systems",
      "Warehousing automation",
      "Manufacturing robotics",
      "Drone-based delivery",
      "Rehabilitation robotics"
    ],
    "faculty": [
      {
        "name": "Sachit Rao",
        "email": "sachit@iiitb.ac.in"
      }
    ],
    "description": "The Robotics Studio focuses on industrial robotics applications such as warehousing and manufacturing, multi-robot coordination, sensor-based navigation, rehabilitation robotics, and drone-based systems."
  },
  {
    "name": "Centre for Accessibility in the Global South (CAGS)",
    "icon": "♿",
    "tags": [
      "Accessible education",
      "Assistive technology",
      "Inclusive digital learning"
    ],
    "faculty": [
      {
        "name": "Amit Prakash",
        "email": "kartik.joshi@iiitb.ac.in"
      }
    ],
    "description": "CAGS is a research-based multidisciplinary centre for disability studies, with a focus on the Global South. The centre focuses on creating a network and a shared platform for bridging together industry, academia and organizations working with people with disabilities, to create accessible solutions.",
  },
  {
    "name": "Stochastic Control Lab (SCL)",
    "icon": "🎯",
    "tags": [
      "Reinforcement learning",
      "Multi-agent learning",
      "Stochastic approximation",
      "Deep learning"
    ],
    "faculty": [
      {
        "name": "Raghuram Bharadwaj Diddigi",
        "email": "raghuram.bharadwaj@iiitb.ac.in"
      }
    ],
    "description": "SCL focuses on theory and applications of stochastic optimal control, including reinforcement learning, multi-agent learning, deep learning, and applications in robotics, UAVs, and large language models."
  },
  {
    "name": "E-Health Research Center (EHRC)",
    "icon": "🏥",
    "tags": [
      "Public health systems",
      "Medical image analysis",
      "Health data privacy",
      "Assistive devices",
      "Robotic surgery"
    ],
    "faculty": [
      {
        "name": "T K Srikanth",
        "email": "tk.srikanth@iiitb.ac.in"
      },
      {
        "name": "Jaya Sreevalsan Nair",
        "email": "jaya@iiitb.ac.in"
      },
      {
        "name": "Amit Prakash",
        "email": "amit.prakash@iiitb.ac.in"
      }
    ],
    "description": "EHRC conducts applied research in digital health technologies, focusing on public health, mental health, disabilities, medical imaging, assistive devices, robotic surgery, and health data privacy."
  },
  {
    "name": "COMET Lab",
    "icon": "🛰️",
    "tags": [
      "Wireless communication",
      "Embedded systems for 5G and beyond"
    ],
    "faculty": [
      {
        "name": "Prem Singh",
        "email": "prem.singh@iiitb.ac.in"
      }
    ],
    "description": "The COMET Lab focuses on embedded system design for 5G and beyond wireless communication systems."
  }
]