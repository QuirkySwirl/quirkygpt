export type TemplateInput = {
    id: string;
    label: string;
    placeholder: string;
    type: "text" | "textarea" | "select";
    options?: string[];
};

export type Template = {
    id: string;
    title: string;
    description: string;
    command: string;
    inputs: TemplateInput[];
    icon: any;
    categories: string[];
};

export const TEMPLATES: Template[] = [
    {
        "id": "a6dc-0f21-c102-6c22",
        "title": "Personalized Learning Plan",
    "description": "Generate a custom learning plan based on the user's interests, goals, and learning preferences to help them acquire new skills and knowledge.",
    "command": "Please provide a fully comprehensive and detailed guide on creating a personalized learning plan for the user based on their specific learning goals and needs. The guide should include the following aspects:\n\n1. Identifying individual strengths and weaknesses\n2. Setting clear and achievable goals\n3. Planning a learning schedule\n4. Selecting appropriate learning resources and methods\n5. Incorporating practical activities and hands-on experience\n6. Tracking progress and adjusting the plan as needed\n7. Implementing strategies to stay motivated and committed\n8. Utilizing feedback and self-reflection for continuous improvement:",
    "icon": "<i class='fas fa-graduation-cap text-primary'></i>",
    "categories": ["learning", "education", "skills"],
    "inputs": [
        {
            "id": "userName",
            "type": "text",
            "label": "User Name",
            "placeholder": "John Smith"
        },
        {
            "id": "learningGoals",
            "type": "text",
            "label": "Learning Goals",
            "placeholder": "Programming, photography, public speaking"
        },
        {
            "id": "preferredResources",
            "type": "text",
            "label": "Preferred Resources",
            "placeholder": "Books, online courses, workshops"
        },
        {
            "id": "learningStyle",
            "type": "text",
            "label": "Learning Style",
            "placeholder": "Visual, auditory, kinesthetic"
        },
        {
            "id": "timeCommitment",
            "type": "text",
            "label": "Time Commitment",
            "placeholder": "5 hours per week"
        }
    ]
    },
    {
        "id": "3b9e-c357-63fb-f7cb",
        "title": "Personal Security & Privacy Plan",
    "description": "Create a personalized security and privacy plan to help users protect their personal information and devices against potential threats.",
    "command": "Create a tailored personal security and privacy plan for the following individual:",
    "icon": "<i class='fas fa-shield-alt text-primary'></i>",
    "categories": ["security", "privacy", "protection"],
    "inputs": [
        {
            "id": "userName",
            "type": "text",
            "label": "User Name",
            "placeholder": "Jane Doe"
        },
        {
            "id": "deviceTypes",
            "type": "text",
            "label": "Device Types",
            "placeholder": "Laptop, smartphone, tablet"
        },
        {
            "id": "onlineActivities",
            "type": "text",
            "label": "Online Activities",
            "placeholder": "Online banking, social media, shopping"
        },
        {
            "id": "privacyConcerns",
            "type": "text",
            "label": "Privacy Concerns",
            "placeholder": "Identity theft, phishing, malware"
        },
        {
            "id": "currentSecurityMeasures",
            "type": "text",
            "label": "Current Security Measures",
            "placeholder": "Antivirus software, strong passwords, secure Wi-Fi"
        }
    ]
    },

    {
        "id": "5df5-5b3a-d3a7-1610",
        "title": "Personalized Recipe Creator",
        "description": "Generate creative and personalized recipes based on user's preferences, ingredients, and dietary restrictions.",
        "command": "Please create a personalized and detailed recipe that meets the following requirements from the user. The recipe should include the following aspects: \n\n1. List of ingredients with quantities\n2. Clear step-by-step cooking instructions\n3. Cooking or preparation time\n4. Nutritional information, if applicable\n5. Serving size and suggestions for presentation\n6. Tips for storage or reheating, if applicable\n7. Possible substitutions or variations to cater to dietary preferences",
        "icon": "<i class='fas fa-utensils text-primary'></i>",
        "categories": ["recipes", "cooking", "food"],
        "inputs": [
        {
            "id": "cook",
            "type": "textarea",
            "label": "Describe what you're in the mood for...",
            "placeholder": "Tomatoes, Basil, Olive Oil"
        },
        {
            "id": "ingredients",
            "type": "text",
            "label": "What do you have? available ingredients",
            "placeholder": "Tomatoes, Basil, Olive Oil"
        },
        {
            "id": "preferences",
            "type": "text",
            "label": "Preferences",
            "placeholder": "Spicy, Sweet, Salty, Savory"
        },
        {
            "id": "dietaryRestrictions",
            "type": "text",
            "label": "Dietary Restrictions",
            "placeholder": "Vegetarian, Gluten-free, Dairy-free"
        }
    ]
    },
    {
        "id": "8d27-85d1-d2bb-f6d8",
        "title": "Customized Health Assessment",
        "description": "Generate a personalized health assessment based on the user's medical history, symptoms, and lifestyle habits.",
        "command": "Please provide a comprehensive and detailed medical advice based on the user's specific medical concern. The guide should include the following aspects: \n\n1. Recognizing signs and symptoms\n2. Finding reputable online medical resources\n3. Identifying the appropriate type of healthcare professional\n4. Determining urgency and scheduling a medical appointment\n5. Preparing for the medical appointment\n6. Exploring telemedicine options\n7. Seeking support from local healthcare organizations and patient groups\n8. Understanding when to seek emergency care:",
        "icon": "<i class='fas fa-stethoscope text-primary'></i>",
        "categories": ["medical", "health", "assessment"],
        "inputs": [
            {
                "id": "userName",
                "type": "text",
                "label": "User Name",
                "placeholder": "John Smith"
            },
            {
                "id": "age",
                "type": "text",
                "label": "Age",
                "placeholder": "35"
            },
            {
                "id": "gender",
                "type": "text",
                "label": "Gender",
                "placeholder": "Male or Female"
            },
            {
                "id": "medicalHistory",
                "type": "text",
                "label": "Medical History",
                "placeholder": "Diabetes, high blood pressure, allergies"
            },
            {
                "id": "currentSymptoms",
                "type": "text",
                "label": "Current Symptoms",
                "placeholder": "Fever, fatigue, shortness of breath"
            },
            {
                "id": "lifestyleHabits",
                "type": "text",
                "label": "Lifestyle Habits",
                "placeholder": "Exercise frequency, diet, smoking status"
            }
        ]
    },
    {
        "id": "eb38-d6a3-3b3c-d790",
        "title": "Personalized Travel Itinerary",
        "description": "Create a custom travel itinerary based on the user's destination, preferences, budget, and available time.",
        "command": "Please create a detailed and personalized travel or event itinerary based on the user's preferences, destination, and dates. The itinerary should include the following elements: \n\n1. Accommodation options tailored to the user's preferences\n2. Day-by-day activity plans, including sightseeing, recreational activities, and local events\n3. Transportation recommendations for getting around the destination\n4. Recommendations for dining, including local specialties and unique culinary experiences\n5. Suggestions for cultural and educational experiences\n6. Tips for safety and local customs\n7. Information on the destination's weather, currency, and any relevant travel advisories:",
        "icon": "<i class='fas fa-plane text-primary'></i>",
        "categories": ["travel", "planning", "itinerary"],
        "inputs": [
            {
                "id": "userName",
                "type": "text",
                "label": "User Name",
                "placeholder": "Jane Doe"
            },
            {
                "id": "destination",
                "type": "text",
                "label": "Destination",
                "placeholder": "Paris, Sydney, New York"
            },
            {
                "id": "travelDates",
                "type": "text",
                "label": "Travel Dates",
                "placeholder": "July 12-20, 2023"
            },
            {
                "id": "travelInterests",
                "type": "text",
                "label": "Travel Interests",
                "placeholder": "Cultural experiences, nature, city life"
            },
            {
                "id": "budget",
                "type": "text",
                "label": "Budget",
                "placeholder": "$2,000-$5,000"
            },
            {
                "id": "accommodationPreference",
                "type": "text",
                "label": "Accommodation Preference",
                "placeholder": "Hotel, Airbnb, hostel"
            }
        ]
    },

    {
        "id": "f4b4-4dc9-38e4-4714",
        "title": "Personalized Legal Consultation",
        "description": "Provide a detailed legal consultation based on the user's specific case and legal needs.",
        "command": "Please provide a fully comprehensive and detailed guide on how to obtain legal assistance and where to find detailed legal information based these inputs. The guide should include the following aspects: \n\n1. Identifying the type of legal issue\n2. Researching relevant laws\n3. Finding a qualified attorney\n4. Exploring free or low-cost legal aid options\n5. Seeking online legal resources and forums for peer assistance\n6. Utilizing local bar associations and legal directories\n7. Leveraging government resources and agencies\n8. Understanding available options for self-representation:",
        "icon": "<i class='fas fa-gavel text-primary'></i>",
        "categories": ["legal", "advice", "consultation"],
        "inputs": [
            {
                "id": "userName",
                "type": "text",
                "label": "User Name",
                "placeholder": "Jane Doe"
            },
            {
                "id": "caseType",
                "type": "text",
                "label": "Case Type",
                "placeholder": "Property dispute, divorce, contract law"
            },
            {
                "id": "legalIssueDescription",
                "type": "textarea",
                "label": "Legal Issue Description",
                "placeholder": "Describe your legal issue in detail"
            },
            {
                "id": "jurisdiction",
                "type": "text",
                "label": "Jurisdiction",
                "placeholder": "California, USA"
            },
            {
                "id": "preferredAttorney",
                "type": "text",
                "label": "Preferred Attorney",
                "placeholder": "Name or law firm (optional)"
            }
        ]
    
    },
    {
        "id": "a0c6-7112-e2d8-07e9",
        "title": "Personalized Tech Support",
        "description": "Provide customized technical support based on the user's devices, technical issues, and preferences.",
        "command": "Please provide a fully comprehensive and detailed guide on creating a personalized technical support plan for the user's specific issue. The guide should include the following aspects: \n\n1. Identifying the root cause of the issue\n2. Gathering necessary tools, software, and resources\n3. Consultation with experts or user forums for guidance\n4. Planning and executing step-by-step troubleshooting procedures\n5. Assessing preventive measures and best practices for future incidents\n6. Documentation of resolution steps and learned lessons\n7. Leveraging customer support or warranties where applicable\n8. Evaluating the need for professional services or upgrades",
        "icon": "<i class='fas fa-tools text-primary'></i>",
        "categories": ["tech", "support", "diagnostics"],
        "inputs": [
            {
                "id": "userName",
                "type": "text",
                "label": "User Name",
                "placeholder": "Jane Doe"
            },
            {
                "id": "deviceType",
                "type": "text",
                "label": "Device Type",
                "placeholder": "Laptop, smartphone, tablet"
            },
            {
                "id": "deviceBrand",
                "type": "text",
                "label": "Device Brand",
                "placeholder": "Apple, Samsung, Dell"
            },
            {
                "id": "operatingSystem",
                "type": "text",
                "label": "Operating System",
                "placeholder": "Windows, macOS, Android"
            },
            {
                "id": "technicalIssue",
                "type": "text",
                "label": "Technical Issue",
                "placeholder": "WiFi not working, slow performance, software installation"
            },
            {
                "id": "preferredSupportMethod",
                "type": "text",
                "label": "Preferred Support Method",
                "placeholder": "Email, phone, remote assistance"
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-4374",
        "title": "Personalized Financial Planning",
        "description": "Develop a tailored financial plan based on the user's financial goals, assets, liabilities, and risk tolerance.",
        "command": "Please provide a fully comprehensive and detailed personalized financial plan based on the user's specific financial details. The guide should include the following aspects: \n\n1. Assessing the user's current financial situation\n2. Setting financial goals based on the user's needs and objectives\n3. Creating a realistic budget and tracking expenses\n4. Managing debt and improving credit scores\n5. Saving and investing in suitable financial products\n6. Planning for major life events (e.g., college, wedding, retirement)\n7. Protecting assets and income through adequate insurance coverage\n8. Regularly reviewing and adjusting the financial plan as needed",
        "icon": "<i class='fas fa-coins text-primary'></i>",
        "categories": ["finance", "planning", "investment"],
        "inputs": [
        {
            "id": "userName",
            "type": "text",
            "label": "User Name",
            "placeholder": "John Smith"
        },
        {
            "id": "financialGoals",
            "type": "text",
            "label": "Financial Goals",
            "placeholder": "Retirement, home purchase, education"
        },
        {
            "id": "assets",
            "type": "text",
            "label": "Assets",
            "placeholder": "Real estate, stocks, savings"
        },
        {
            "id": "liabilities",
            "type": "text",
            "label": "Liabilities",
            "placeholder": "Mortgage, loans, credit card debt"
        },
        {
            "id": "riskTolerance",
            "type": "text",
            "label": "Risk Tolerance",
            "placeholder": "Low, medium, high"
        },
        {
            "id": "timeHorizon",
            "type": "text",
            "label": "Time Horizon",
            "placeholder": "Short-term, medium-term, long-term"
        }
    ]
    },
    {
        "id": "2f67-d52f-fc58-383d",
        "title": "Childcare & Parenting Guide",
     "description": "Generate a personalized childcare and parenting guide based on the user's children's ages, family values, and the topics of interest for the parents.",
    "command": "Please provide a personalized parenting and childcare plan for {UserName}, based on their preferences and lifestyle. The plan should cover various aspects of parenting and childcare in a detailed, yet friendly and non-serious manner. Consider the following aspects: \n\n1. Establishing routines and schedules\n2. Bonding and communication with the child\n3. Nurturing emotional and social development\n4. Encouraging physical and cognitive development\n5. Healthy meal planning and nutrition\n6. Disciplining strategies and setting boundaries\n7. Balancing work-life and parenting\n8. Tips for adapting to various developmental stages and milestones:",
    
        "icon": "<i class='fas fa-child text-primary'></i>",
        "categories": ["parenting", "childcare", "family"],
        "inputs": [
        {
            "id": "userName",
            "type": "text",
            "label": "User Name",
            "placeholder": "John Smith"
        },
        {
            "id": "childrenAges",
            "type": "text",
            "label": "Children's Ages",
            "placeholder": "2 years, 6 years, 10 years"
        },
        {
            "id": "familyValues",
            "type": "textarea",
            "label": "Family Values",
            "placeholder": "Communication, education, discipline"
        },
        {
            "id": "topicsOfInterest",
            "type": "textarea",
            "label": "Topics of Interest",
            "placeholder": "Sleep training, nutrition, managing screen time"
        }
    ]
    },
    {
        "id": "1a79-8d7e-cc88-1e61",
        "title": "Personalized Career Counseling",
        "description": "Provide customized career guidance based on the user's interests, education, work experience, and goals.",
        "command": "Create a tailored career counseling plan for the following individual:",
        "icon": "<i class='fas fa-user-tie text-primary'></i>",
        "categories": ["career", "counseling", "guidance"],
        "inputs": [
            {
                "id": "userName",
                "type": "text",
                "label": "User Name",
                "placeholder": "Jane Doe"
            },
            {
                "id": "interests",
                "type": "text",
                "label": "Interests",
                "placeholder": "Computers, environment, healthcare"
            },
            {
                "id": "education",
                "type": "text",
                "label": "Education",
                "placeholder": "Bachelor's in Science, MBA"
            },
            {
                "id": "workExperience",
                "type": "text",
                "label": "Work Experience",
                "placeholder": "5 years in IT, 2 years in marketing"
            },
            {
                "id": "careerGoals",
                "type": "text",
                "label": "Career Goals",
                "placeholder": "Management, entrepreneurship, work-life balance"
            },
            {
                "id": "preferredIndustry",
                "type": "text",
                "label": "Preferred Industry",
                "placeholder": "Technology, healthcare, finance (optional)"
            }
        ]
    },
    {
        "id": "72e8-66f6-1009-9e54",
        "title": "Customized Personal Development Plan",
    "description": "Create a personalized development plan based on the user's goals, strengths, weaknesses, and interests.",
    "command": "Create a tailored personal development plan for the following individual:",
    "icon": "<i class='fas fa-chart-line text-primary'></i>",
    "categories": ["personal", "development", "growth"],
    "inputs": [
        {
            "id": "userName",
            "type": "text",
            "label": "User Name",
            "placeholder": "John Smith"
        },
        {
            "id": "goals",
            "type": "text",
            "label": "Personal Development Goals",
            "placeholder": "Improve communication, leadership, creativity"
        },
        {
            "id": "strengths",
            "type": "text",
            "label": "Strengths",
            "placeholder": "Problem-solving, teamwork, attention to detail"
        },
        {
            "id": "weaknesses",
            "type": "text",
            "label": "Weaknesses",
            "placeholder": "Time management, public speaking, decision-making"
        },
        {
            "id": "interests",
            "type": "text",
            "label": "Interests",
            "placeholder": "Arts, technology, sports"
        },
        {
            "id": "learningPreferences",
            "type": "text",
            "label": "Learning Preferences",
            "placeholder": "Reading, visual, kinesthetic"
        }
    ]
    },
    {
        "id": "e7b3-458e-62df-17c8",
        "title": "Customized Home Organization Plan",
    "description": "Generate a personalized home organization and decluttering plan based on the user's living space, preferences, and desired areas of focus.",
    "command": "Create a tailored home organization plan for the following individual:",
    "icon": "<i class='fas fa-home text-primary'></i>",
    "categories": ["organization", "declutter", "home"],
    "inputs": [
        {
            "id": "userName",
            "type": "text",
            "label": "User Name",
            "placeholder": "John Smith"
        },
        {
            "id": "livingSpaceType",
            "type": "text",
            "label": "Living Space Type",
            "placeholder": "Apartment, house, studio"
        },
        {
            "id": "areasToFocus",
            "type": "text",
            "label": "Areas to Focus",
            "placeholder": "Kitchen, bedroom, garage"
        },
        {
            "id": "preferredOrganizationMethods",
            "type": "text",
            "label": "Preferred Organization Methods",
            "placeholder": "Minimalism, color-coding, smart storage"
        },
        {
            "id": "availability",
            "type": "text",
            "label": "Availability",
            "placeholder": "Weekends, evenings, flexible"
        }
    ]
    },
    {
        "id": "23e7-687f-0df7-1e47",
        "title": "Customized Workout & Nutrition Plan",
        "description": "Generate a personalized workout and nutrition plan based on the user's fitness goals, preferences, and body data.",
        "command": "Create a comprehensive, detailed & tailored workout and nutrition plan for the following individual:",
        "icon": "<i class='fas fa-dumbbell text-primary'></i>",
        "categories": ["fitness", "health", "nutrition"],
        "inputs": [
        {
            "id": "userName",
            "type": "text",
            "label": "User Name",
            "placeholder": "John Smith"
        },
        {
            "id": "age",
            "type": "text",
            "label": "Age",
            "placeholder": "35"
        },
        {
            "id": "weight",
            "type": "text",
            "label": "Weight (in Kgs)",
            "placeholder": "180"
        },
        {
            "id": "height",
            "type": "text",
            "label": "Height",
            "placeholder": "5'11''"
        },
        {
            "id": "fitnessGoals",
            "type": "text",
            "label": "Fitness Goals",
            "placeholder": "Weight loss, muscle gain, improved cardiovascular health"
        },
        {
            "id": "workoutPreferences",
            "type": "text",
            "label": "Workout Preferences",
            "placeholder": "Strength training, HIIT, outdoor activities"
        },
        {
            "id": "dietaryRestrictions",
            "type": "text",
            "label": "Dietary Restrictions",
            "placeholder": "Vegetarian, gluten-free"
        }
    ]
    },
    {
        "id": "87a3-56d9-3182-2a01",
        "title": "Job Description",
        "description": "Create a clear and concise job description to attract suitable candidates.",
        "command": "Write a compelling and a clear and concise job description for the following company:",
        "icon": "<i class='fas fab fa-linkedin text-primary'></i>",
        "categories": ["linkedin", "social_media"],
        "inputs": [
            {
                "id": "jobTitle",
                "type": "text",
                "label": "Job Title",
                "placeholder": "Software Engineer",
            },
            {
                "id": "companyName",
                "type": "text",
                "label": "Company Name",
                "placeholder": "InnovateTech",
            },
            {
                "id": "companyDescription",
                "type": "textarea",
                "label": "Company Description",
                "placeholder": "InnovateTech is a cutting-edge technology firm that specializes in developing software solutions for businesses.",
            },
            {
                "id": "jobOverview",
                "type": "textarea",
                "label": "Job Overview",
                "placeholder": "We are looking for a skilled Software Engineer to join our team and help us develop high-quality software solutions.",
            },
            {
                "id": "responsibilities",
                "type": "textarea",
                "label": "Responsibilities",
                "placeholder": "Design, develop, and maintain software solutions. Collaborate with cross-functional teams to deliver high-quality products.",
            },
            {
                "id": "requirements",
                "type": "textarea",
                "label": "Requirements",
                "placeholder": "Bachelor's degree in Computer Science or related field. Proficient in JavaScript, Python, or Java.",
            },
            {
                "id": "benefits",
                "type": "textarea",
                "label": "Benefits",
                "placeholder": "Competitive salary, flexible working hours, and a comprehensive benefits package.",
            },
            {
                "id": "location",
                "type": "text",
                "label": "Location",
                "placeholder": "New York City, NY",
            },
            {
                "id": "employmentType",
                "type": "text",
                "label": "Employment Type",
                "placeholder": "Full-time",
            }
        ]
    },
    {
        "id": "a1b2-34c5-678d-90ef",
        "title": "Customized Meal Plan and Recipes",
        "description": "Generate a personalized meal plan with recipes based on the user's dietary needs, preferences, available time, and cooking skills.",
        "command": "Create a tailored meal plan and recipes for the following individual:",
        "icon": "<i class='fas fa-utensils text-primary'></i>",
        "categories": ["cooking", "meal planning", "nutrition"],
        "inputs": [
            {
                "id": "userName",
                "type": "text",
                "label": "User Name",
                "placeholder": "John Smith"
            },
            {
                "id": "dietaryNeeds",
                "type": "text",
                "label": "Dietary Needs",
                "placeholder": "Low-carb, high-protein, vegan"
            },
            {
                "id": "mealPreferences",
                "type": "text",
                "label": "Meal Preferences",
                "placeholder": "Asian cuisine, comfort food, salads"
            },
            {
                "id": "cookingSkillLevel",
                "type": "text",
                "label": "Cooking Skill Level",
                "placeholder": "Beginner, intermediate, expert"
            },
            {
                "id": "availableTime",
                "type": "text",
                "label": "Available Time",
                "placeholder": "30 minutes, 1 hour, no time limit"
            }
        ]
    }
]
