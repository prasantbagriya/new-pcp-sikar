<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    private static function getCoursesData()
    {
        return [
            'neet-ug' => [
                'id' => 'neet-ug',
                'slug' => 'neet-ug',
                'title' => 'NEET-UG Medical Classroom Coaching Division',
                'shortTitle' => 'NEET-UG Medical',
                'stream' => 'Medical Entrance Wing',
                'category' => 'neet',
                'tagline' => 'AIR 1 NEET Benchmark • 720/720 Scientific Pedagogy',
                'classes' => 'Class 11th, 12th & 12th Pass Target Dropper Batch',
                'badge' => 'AIR 1 AIIMS / NEET-UG System',
                'accentColor' => 'emerald',
                'heroColor' => 'from-[#2e0854] via-[#1a0533] to-[#0f2e1e]',
                'bannerBadge' => 'Session 2026-27 Admissions Open',
                'description' => 'North India’s most disciplined residential medical coaching program. Meticulously engineered around NCERT line-by-line mastery, 12-hour continuous faculty doubt clearance, and continuous AIIMS-level test series that has produced All-India Rank 1.',
                'stats' => [
                    ['value' => 'AIR 1', 'label' => 'AIIMS Benchmark', 'sub' => 'Devesh Joshi (AIR 1)'],
                    ['value' => '1,000+', 'label' => 'Annual MBBS Seats', 'sub' => 'Government Medical Colleges'],
                    ['value' => '12 Hours', 'label' => 'Daily Doubts', 'sub' => 'Permanent Doctor Faculty'],
                    ['value' => '720/720', 'label' => 'Highest Score Track', 'sub' => 'Perfect Score Pedagogy'],
                    ['value' => 'Up to 100%', 'label' => 'P-SAT Scholarship', 'sub' => 'Tuition & Hostel Waivers'],
                ],
                'batches' => [
                    [
                        'name' => 'Target Dropper Batch (Repeater)',
                        'target' => '12th Pass Aspirants',
                        'duration' => '1 Year Intensive',
                        'timing' => '6:00 AM - 10:30 PM (Residential Synced)',
                        'startDate' => 'Fresh Batches Every Monday',
                        'medium' => 'Hindi & English Separate Batches',
                        'highlights' => ['8 Hours Daily Lectures & Supervised Self-Study', 'Daily 120-Question DPPs with Faculty Discussions', 'Weekly 720-Mark NTA Pattern OMR Test with Ranking', 'Special Focus on Biology NCERT Decoding & Physics Numericals']
                    ],
                    [
                        'name' => 'Enthusiast Batch (Class 12th)',
                        'target' => 'Class 12th Studying',
                        'duration' => '1 Year Integrated',
                        'timing' => 'School + Coaching Synchronized',
                        'startDate' => 'April / May 2026',
                        'medium' => 'English & Hindi Medium',
                        'highlights' => ['95%+ Board Scoring Strategy + High-Intensity NEET Drill', 'Full 11th Syllabus Comprehensive Revision Before Pre-Boards', 'Subject-wise Micro Tests on Board Subjective Formats', 'Personal Error Logbook Analysis by Medical Mentors']
                    ],
                    [
                        'name' => 'Nurture Batch (Class 11th)',
                        'target' => '10th to 11th Moving',
                        'duration' => '2-Year Comprehensive',
                        'timing' => 'Full Day-Boarding / Residential',
                        'startDate' => 'April / June 2026',
                        'medium' => 'English & Hindi Medium',
                        'highlights' => ['Fundamental Concept Building from Ground Zero', 'Gradual Transition from Class 10 to Higher Competitive Level', 'School Board (CBSE/RBSE) + NEET Integrated Syllabus', 'Weekly Doubt Mentorship to Prevent Backlog Formation']
                    ]
                ],
                'curriculum' => [
                    [
                        'subject' => 'Physics',
                        'faculty' => 'Senior IITian & Experienced Coaching HODs',
                        'coverage' => 'Mechanics, Gravitation, Thermodynamics, SHM & Waves, Electrodynamics, Optics, and Modern Physics.',
                        'features' => ['Step-by-step mathematical prerequisite bridge classes', 'Formula mastery sheets & shortcut calculation techniques', 'NCERT Exemplar + Previous 20 Years NEET Questions thoroughly solved', 'Daily DPP discussions with immediate doubt counter access']
                    ],
                    [
                        'subject' => 'Chemistry',
                        'faculty' => 'Specialized Physical, Inorganic & Organic Doctors & Masters',
                        'coverage' => 'Physical Chemistry numericals, Inorganic NCERT line-by-line tables, Organic mechanisms & named reactions.',
                        'features' => ['Daily NCERT line-by-line extraction charts for Inorganic Chemistry', 'Reaction mechanism maps and reagent transformation flowcharts', 'Strict focus on NCERT laboratory manual facts and observations', 'Zero-confusion memory retention tricks and weekly retention tests']
                    ],
                    [
                        'subject' => 'Biology (Botany & Zoology)',
                        'faculty' => 'Permanent Medical Faculty & Biology Author Mentors',
                        'coverage' => 'Cell Biology, Genetics, Human Physiology, Plant Physiology, Biotechnology, Ecology & Diversity.',
                        'features' => ['Every single diagram, table, and summary line of NCERT analyzed', 'Special Assertion-Reason and Statement-based question banks', 'Micro-quizzes after every lecture to lock concepts into long-term memory', 'Target 360/360 score training for top government medical college seats']
                    ]
                ],
                'dailyRoutine' => [
                    ['time' => '06:00 AM - 06:30 AM', 'activity' => 'Wake-up, Fresh Up & Morning Fitness Walk'],
                    ['time' => '06:30 AM - 07:30 AM', 'activity' => 'Healthy Nutritious Breakfast in Campus Dining Hall'],
                    ['time' => '08:00 AM - 01:30 PM', 'activity' => 'Core Classroom Lectures with High-Tech Smart Boards'],
                    ['time' => '01:30 PM - 02:30 PM', 'activity' => 'Warm Lunch & Supervised Rest Period'],
                    ['time' => '02:30 PM - 05:30 PM', 'activity' => 'Compulsory Supervised Self-Study & Daily DPP Solving'],
                    ['time' => '05:30 PM - 08:00 PM', 'activity' => '12-Hour Continuous Faculty Doubt Counter Desk'],
                    ['time' => '08:00 PM - 09:00 PM', 'activity' => 'Dinner & Evening Pastoral Recreation'],
                    ['time' => '09:00 PM - 10:30 PM', 'activity' => 'Night Review, Daily Error Logbook & Sleep Lights Out']
                ],
                'hostelInfo' => [
                    'title' => 'Integrated Residential Care Campus',
                    'desc' => 'Separate multi-acre air-cooled and AC hostels for boys and girls on Palwas Road HQ. Nutritious home-cooked food in modern steam kitchens, 24/7 CCTV surveillance, biometric security, and full-time resident wardens.',
                    'features' => ['Nutritious 4-Time Meal Schedule (Milk, Sprouted Breakfast, Lunch, Evening Snacks, Dinner)', 'Strict zero-mobile-phone policy to protect attention and mental peace', '24/7 in-house medical dispensary with ambulance and visiting doctor', 'Dedicated hostel library study counters accessible until 11:00 PM']
                ],
                'scholarshipInfo' => [
                    'test' => 'P-SAT (Prince Scholarship cum Admission Test) & Prince Olympiad',
                    'fund' => '₹108+ Crore Scholarship Pool',
                    'waiver' => 'Up to 100% Tuition & Hostel Concessions',
                    'boardCriteria' => 'Class 10th / 12th Board Merit Scores (90%+ gets direct fee scholarship tiers)'
                ],
                'toppers' => [
                    ['name' => 'Devesh Joshi', 'rank' => 'AIR 1', 'exam' => 'AIIMS / NEET-UG', 'college' => 'AIIMS New Delhi', 'avatar' => '/uploads/pcp/toppers/devesh_joshi_air1.jpg'],
                    ['name' => 'Sumit Sharma', 'rank' => 'AIR 54', 'exam' => 'NEET-UG', 'college' => 'SMS Medical College, Jaipur', 'avatar' => null],
                    ['name' => 'Pooja Choudhary', 'rank' => 'AIR 112', 'exam' => 'NEET-UG', 'college' => 'Lady Hardinge, New Delhi', 'avatar' => null],
                ]
            ],

            'iit-jee' => [
                'id' => 'iit-jee',
                'slug' => 'iit-jee',
                'title' => 'IIT-JEE (Main + Advanced) Engineering Wing',
                'shortTitle' => 'IIT-JEE Engineering',
                'stream' => 'Engineering Entrance Wing',
                'category' => 'jee',
                'tagline' => 'AIR 225 Sikar Coaching Topper • Super-50 Rankers Mentorship',
                'classes' => 'Class 11th, 12th & Super-50 Dropper Rankers Batch',
                'badge' => 'Sikar Coaching Topper AIR 225 • 1:4 JEE Adv Ratio',
                'accentColor' => 'amber',
                'heroColor' => 'from-[#2e0854] via-[#1e0738] to-[#261504]',
                'bannerBadge' => 'Session 2026-27 Admissions Open',
                'description' => 'Premier high-intensity engineering coaching mentored by full-time IITian and NITian faculties. Produced the Sikar coaching topper (AIR 225) in JEE Advanced with an unprecedented 1:4 selection ratio.',
                'stats' => [
                    ['value' => 'AIR 225', 'label' => 'Sikar Rank 1', 'sub' => 'Vivek Gupta (IIT Bombay)'],
                    ['value' => '1 in 4', 'label' => 'JEE Adv Selection', 'sub' => 'North India Highest Ratio'],
                    ['value' => '102+', 'label' => '99+ Percentilers', 'sub' => 'In JEE Main Session'],
                    ['value' => '100%', 'label' => 'Permanent IITians', 'sub' => 'Core Faculty Resides in Sikar'],
                    ['value' => '500+ CBTs', 'label' => 'Digital Testing Lab', 'sub' => 'Exact NTA Environment'],
                ],
                'batches' => [
                    [
                        'name' => 'Super-50 Rankers Batch (Dropper / 12th Pass)',
                        'target' => 'Top JEE Main / Adv Repeaters',
                        'duration' => '1 Year High-Intensity',
                        'timing' => 'Intensive Analytical Routine',
                        'startDate' => 'Fresh Batches Every Monday',
                        'medium' => 'English & Hindi Separate Batches',
                        'highlights' => ['Direct 1-on-1 mentorship with IITian Senior HODs', 'Advanced multi-concept problem solving marathons (Irodov, Pathfinder, Cengage)', 'Dedicated CBT Computer Lab with real exam simulations', 'Weekly individual rank analysis and personalized strategy sessions']
                    ],
                    [
                        'name' => 'Drona Batch (Class 12th)',
                        'target' => 'Class 12th JEE Aspirants',
                        'duration' => '1 Year Comprehensive',
                        'timing' => 'Board + JEE Integrated',
                        'startDate' => 'April / May 2026',
                        'medium' => 'English & Hindi Medium',
                        'highlights' => ['High-precision syllabus completion by October to allow 4 months of revision', '100% Board numerical & subjective answer writing practice', 'Computer-based mock tests on NTA pattern every Sunday', 'Error logbook tracking to systematically eliminate silly mistakes']
                    ],
                    [
                        'name' => 'Arjuna Batch (Class 11th)',
                        'target' => '10th to 11th Moving',
                        'duration' => '2-Year Foundational',
                        'timing' => 'Day-Boarding & Residential',
                        'startDate' => 'April / June 2026',
                        'medium' => 'English & Hindi Medium',
                        'highlights' => ['Bridging basic mathematics, vectors, and calculus tools', 'Focus on intuitive visualization of physics and mathematics proofs', 'Building speed and accuracy through timed level-wise question sheets', 'Regular parent-teacher academic review meets']
                    ]
                ],
                'curriculum' => [
                    [
                        'subject' => 'Mathematics',
                        'faculty' => 'Senior IIT Bombay & Roorkee Mathematicians',
                        'coverage' => 'Calculus, Vectors & 3D Geometry, Coordinate Geometry, Trigonometry, Complex Numbers & Algebra.',
                        'features' => ['Deep analytical insight into multiple-solution approaches', 'Speed-drilling for JEE Main and high-rigor proofs for JEE Advanced', 'Special modules on graphical transformations and visual calculus', 'Step-by-step difficulty leveling: Level 1 (Main) to Level 3 (Olympiad/Adv)']
                    ],
                    [
                        'subject' => 'Physics',
                        'faculty' => 'Experienced Senior HODs with 15+ Years IIT-JEE Record',
                        'coverage' => 'Classical Mechanics, Electrodynamics, Wave Optics, Modern Physics, Thermodynamics.',
                        'features' => ['Conceptual physics modeling with real-life analogies', 'Rigorous multi-concept problem sets merging kinematics, energy, and electrostatics', 'Continuous doubt counters operating 12 hours a day', 'Computerized simulation of physical systems and wave phenomena']
                    ],
                    [
                        'subject' => 'Chemistry',
                        'faculty' => 'Expert Physical, Organic & Inorganic Specialist Pool',
                        'coverage' => 'Thermodynamics, Equilibrium, Organic Reaction Mechanisms, Coordination Chemistry, Metallurgy.',
                        'features' => ['Fast physical chemistry calculation frameworks', 'Deep arrow-pushing mechanisms for organic chemistry', 'Inorganic memorization sheets and periodic trend charts', 'Comprehensive test series on JEE Main speed and Advanced negative-marking control']
                    ]
                ],
                'dailyRoutine' => [
                    ['time' => '06:00 AM - 06:30 AM', 'activity' => 'Wake-up & Mind Refreshment Routine'],
                    ['time' => '06:30 AM - 07:30 AM', 'activity' => 'Nutritious High-Protein Breakfast'],
                    ['time' => '08:00 AM - 01:30 PM', 'activity' => 'Core Analytical Lectures & Concept Modeling'],
                    ['time' => '01:30 PM - 02:30 PM', 'activity' => 'Lunch & Power Nap'],
                    ['time' => '02:30 PM - 05:30 PM', 'activity' => 'High-Level Problem Solving & DPP Practicals'],
                    ['time' => '05:30 PM - 08:00 PM', 'activity' => 'One-on-One Faculty Doubt Desks & CBT Lab Practice'],
                    ['time' => '08:00 PM - 09:00 PM', 'activity' => 'Campus Dinner & Light Physical Walk'],
                    ['time' => '09:00 PM - 10:45 PM', 'activity' => 'Silent Self-Study, Problem Review & Lights Out']
                ],
                'hostelInfo' => [
                    'title' => 'Disciplined Residential Engineering Wing',
                    'desc' => 'High-speed fiber-connected CBT testing labs, air-cooled and AC hostels, quiet study halls, and 24/7 on-campus IITian mentors residing in staff quarters right next to hostels.',
                    'features' => ['Dedicated CBT testing lab with 500+ systems for real NTA simulations', 'Separate hostels for boys and girls with strict biometric check-in', 'Hygienic wholesome meals planned for high mental stamina', 'Zero mobile phone policy with structured parent calling slots']
                ],
                'scholarshipInfo' => [
                    'test' => 'P-SAT (Prince Scholarship cum Admission Test) & JEE Merit Concession',
                    'fund' => '₹108+ Crore Scholarship Corpus',
                    'waiver' => 'Up to 100% Tuition & Hostel Concessions',
                    'boardCriteria' => 'Class 10th / 12th Board Merit Scores (90%+ gets direct scholarship tiers)'
                ],
                'toppers' => [
                    ['name' => 'Vivek Gupta', 'rank' => 'AIR 225', 'exam' => 'JEE Advanced', 'college' => 'IIT Bombay (Computer Science)', 'avatar' => '/uploads/pcp/toppers/vivek_gupta_air225.jpg'],
                    ['name' => 'Rahul Verma', 'rank' => 'AIR 482', 'exam' => 'JEE Advanced', 'college' => 'IIT Delhi (Electrical)', 'avatar' => null],
                    ['name' => 'Ankit Sihag', 'rank' => '99.94%ile', 'exam' => 'JEE Main', 'college' => 'NIT Trichy', 'avatar' => null],
                ]
            ],

            'pre-foundation' => [
                'id' => 'pre-foundation',
                'slug' => 'pre-foundation',
                'title' => 'Classes 5th to 10th Pre-Foundation & Olympiad Division',
                'shortTitle' => 'Pre-Foundation & Olympiad',
                'stream' => 'Junior Talent & Olympiad Wing',
                'category' => 'foundation',
                'tagline' => 'Early Competitive Edge • ₹108+ Cr Scholarships • 500+ National Medals',
                'classes' => 'Class 5th, 6th, 7th, 8th, 9th, and 10th (CBSE & RBSE)',
                'badge' => 'Classes 5th to 10th • Olympiad & Board Master',
                'accentColor' => 'indigo',
                'heroColor' => 'from-[#2e0854] via-[#1c0840] to-[#0c1f40]',
                'bannerBadge' => 'Session 2026-27 Admissions Open',
                'description' => 'A scientific junior mentorship framework that develops logical brilliance, mental aptitude, and deep conceptual thinking for national talent exams (Prince Olympiad, IJSO, PRMO, NTSE) while securing 95%+ school board performance.',
                'stats' => [
                    ['value' => '₹108+ Cr', 'label' => 'Scholarship Fund', 'sub' => 'Awarded via Prince Olympiad'],
                    ['value' => '500+', 'label' => 'Olympiad Medals', 'sub' => 'National & International'],
                    ['value' => '95%+', 'label' => 'Board Pass Rate', 'sub' => 'CBSE & RBSE Class 10 Toppers'],
                    ['value' => '100%', 'label' => 'Integrated Routine', 'sub' => 'School + Olympiad Prep'],
                    ['value' => '1:1', 'label' => 'Child Care Ratio', 'sub' => 'Dedicated Junior Wardens'],
                ],
                'batches' => [
                    [
                        'name' => 'Junior Olympiad Champions (Classes 9th & 10th)',
                        'target' => 'Classes 9th & 10th Students',
                        'duration' => '1 or 2 Years Integrated',
                        'timing' => 'School + Olympiad Dual Track',
                        'startDate' => 'April 2026',
                        'medium' => 'English & Hindi Medium',
                        'highlights' => ['Advanced science and mathematics concepts covering 11th-12th fundamentals', 'Intensive preparation for PRMO, IJSO, NMTC, and NTSE', '100% subjective board answer presentation training for Class 10 boards', 'Mental ability and logical deduction practice sessions daily']
                    ],
                    [
                        'name' => 'Middle School Prodigy (Classes 6th to 8th)',
                        'target' => 'Classes 6th, 7th & 8th',
                        'duration' => 'Annual Foundation Track',
                        'timing' => 'Day-Boarding & Junior Hostels',
                        'startDate' => 'April 2026',
                        'medium' => 'English Medium Focus',
                        'highlights' => ['Building mathematical curiosity through puzzles and logic games', 'Hands-on practical experiments in physics and chemistry labs', 'Spoken English, debate club, and public speaking grooming', 'Daily evening sports: Cricket, Football, Swimming, Skating']
                    ],
                    [
                        'name' => 'Primary Spark (Class 5th)',
                        'target' => 'Class 5th Students',
                        'duration' => 'Foundational Nurturing',
                        'timing' => 'Day-Boarding Routine',
                        'startDate' => 'April 2026',
                        'medium' => 'English Medium',
                        'highlights' => ['Stress-free joyful learning with activity-based education', 'Strong foundation in mental arithmetic, English grammar, and reading', 'Parent-like care from caring teachers and dedicated care mothers']
                    ]
                ],
                'curriculum' => [
                    [
                        'subject' => 'Science (Physics, Chemistry, Biology)',
                        'faculty' => 'Dedicated Foundation Subject Masters',
                        'coverage' => 'Forces, Energy, Matter, Living Systems, Cell Structure, and Natural Phenomena.',
                        'features' => ['Experiment-driven conceptual learning in modern campus labs', 'NCERT line-by-line understanding linked with Olympiad problems', 'Visual animation modules explaining complex scientific concepts', 'Weekly interactive science quiz contests']
                    ],
                    [
                        'subject' => 'Mathematics & Logical Reasoning',
                        'faculty' => 'Olympiad Mathematics Specialists',
                        'coverage' => 'Number Systems, Geometry, Algebra, Combinatorics, Mental Ability (MAT).',
                        'features' => ['Fast Vedic mathematics calculation techniques', 'Pattern recognition, spatial reasoning, and puzzle-solving drills', 'PRMO and NMTC previous year question papers breakdown', 'Step-by-step problem-solving worksheets without memorization']
                    ],
                    [
                        'subject' => 'Social Science, English & General Knowledge',
                        'faculty' => 'Senior School Educationists',
                        'coverage' => 'History, Civics, Geography, Economics, Grammar, Comprehension, Global Affairs.',
                        'features' => ['Map work and historical timeline visualization exercises', 'Creative writing, reading comprehension, and vocabulary enrichment', 'Daily current affairs updates and quiz bowls', 'Board pattern descriptive answer writing practice']
                    ]
                ],
                'dailyRoutine' => [
                    ['time' => '06:00 AM - 06:45 AM', 'activity' => 'Wake-up, Morning Yoga & Physical Fitness Exercises'],
                    ['time' => '07:00 AM - 07:45 AM', 'activity' => 'Warm Milk & Nutritious Breakfast'],
                    ['time' => '08:00 AM - 01:30 PM', 'activity' => 'Interactive School & Foundation Classrooms'],
                    ['time' => '01:30 PM - 02:30 PM', 'activity' => 'Lunch & Rest Time'],
                    ['time' => '02:30 PM - 04:30 PM', 'activity' => 'Olympiad & Mental Ability Problem Sessions'],
                    ['time' => '04:30 PM - 06:00 PM', 'activity' => 'Compulsory Evening Sports & Games (Playground)'],
                    ['time' => '06:30 PM - 08:00 PM', 'activity' => 'Supervised Evening Homework & Faculty Doubt Clearance'],
                    ['time' => '08:00 PM - 09:00 PM', 'activity' => 'Wholesome Dinner & Cultural Recreation'],
                    ['time' => '09:30 PM', 'activity' => 'Lights Out & Rest']
                ],
                'hostelInfo' => [
                    'title' => 'Junior Residential Boarding Wing',
                    'desc' => 'Dedicated junior hostels designed specifically for young students with resident care mothers, round-the-clock wardens, and full pastoral support to ensure home-like emotional warmth.',
                    'features' => ['Resident care mothers for primary and middle school students', 'Nutritious balanced child diet rich in fruits, milk, and seasonal vegetables', 'Safe, guarded campus with zero mobile phone access and Sunday family calling', 'Olympic-standard sports complex with qualified coaches']
                ],
                'scholarshipInfo' => [
                    'test' => 'Prince Olympiad (India’s Largest School Talent Hunt)',
                    'fund' => '₹108+ Crore Scholarships & Cash Awards',
                    'waiver' => 'Up to 100% Complete Schooling & Hostel Concession',
                    'boardCriteria' => 'State and District rankers receive laptops, cash awards, and foreign tours'
                ],
                'toppers' => [
                    ['name' => 'P-SAT Star Achievers', 'rank' => 'State Rank 1', 'exam' => 'Prince Olympiad', 'college' => 'PCP Pre-Foundation Scholar', 'avatar' => null],
                    ['name' => 'Aditya Ranwa', 'rank' => 'Gold Medal', 'exam' => 'International Math Olympiad', 'college' => 'PCP Pre-Foundation', 'avatar' => null],
                ]
            ],

            'nda-defence' => [
                'id' => 'nda-defence',
                'slug' => 'nda-defence',
                'title' => 'Prince Defence Academy & NDA Wing',
                'shortTitle' => 'Prince Defence Academy (NDA)',
                'stream' => 'Armed Forces Officer Training Wing',
                'category' => 'defence',
                'tagline' => 'Rajasthan’s Largest Officer-Training Ground • Written + SSB + Physical',
                'classes' => 'Class 11th, 12th & 12th Pass Target Batches',
                'badge' => 'Highest NDA Officer Selections in Rajasthan',
                'accentColor' => 'rose',
                'heroColor' => 'from-[#2e0854] via-[#1a0826] to-[#2b0810]',
                'bannerBadge' => 'Session 2026-27 Admissions Open',
                'description' => 'North India’s premier residential defence academy. Rigorous UPSC NDA written preparation combined with a dedicated 5-day SSB interview training ground, GTO obstacle track, and daily physical drills mentored by retired defence officers.',
                'stats' => [
                    ['value' => '1st', 'label' => 'Rajasthan Rank', 'sub' => 'Highest NDA Officer Selections'],
                    ['value' => '100% GTO', 'label' => 'Obstacle Ground', 'sub' => 'Exact Indian Army Standards'],
                    ['value' => 'SSB Cell', 'label' => 'Ex-Military Board', 'sub' => 'Retired Colonels & Brigadiers'],
                    ['value' => '400m Track', 'label' => 'Synthetic Running', 'sub' => 'Morning & Evening Drills'],
                    ['value' => 'Up to 100%', 'label' => 'Scholarship Waivers', 'sub' => 'Via Defence Talent Exam'],
                ],
                'batches' => [
                    [
                        'name' => 'NDA Target Batch (12th Pass)',
                        'target' => '12th Pass NDA Aspirants',
                        'duration' => '6 Months to 1 Year',
                        'timing' => 'Full Residential Military Routine',
                        'startDate' => 'Fresh Batches Every Month',
                        'medium' => 'English & Hindi Medium',
                        'highlights' => ['Intensive UPSC NDA Mathematics + General Ability Test (GAT) coaching', 'Daily physical PT, obstacle crossing, and cross-country runs', 'Mock SSB interviews, Picture Perception (PPDT), and Group Discussions', 'Current affairs seminars and psychological battery testing']
                    ],
                    [
                        'name' => 'Integrated NDA Foundation (Class 11th & 12th)',
                        'target' => 'Class 11th & 12th Students',
                        'duration' => '2-Year Integrated Officer Cadre',
                        'timing' => 'School + NDA Dual Training',
                        'startDate' => 'April 2026',
                        'medium' => 'English Medium Focus',
                        'highlights' => ['Synchronized CBSE/RBSE Board studies with UPSC syllabus', 'English communication and officer personality grooming from Class 11', 'Regular weekend obstacle courses and outdoor leadership camps', 'First-attempt NDA qualification roadmap']
                    ]
                ],
                'curriculum' => [
                    [
                        'subject' => 'Mathematics (Paper 1)',
                        'faculty' => 'Senior NDA Mathematics Strategists',
                        'coverage' => 'Algebra, Trigonometry, Matrices, Analytical Geometry, Differential Calculus, Statistics & Probability.',
                        'features' => ['30-second shortcut techniques for 120 UPSC objective questions', 'Extensive speed-drilling to conquer the 300-mark paper', 'Past 15 years NDA question patterns thoroughly solved', 'Weekly full-length timed mock tests']
                    ],
                    [
                        'subject' => 'General Ability Test (GAT - Paper 2)',
                        'faculty' => 'English Experts & Defence GS Researchers',
                        'coverage' => 'English Grammar & Vocabulary (200 Marks), Physics, Chemistry, General Science, History, Geography, Current Events (400 Marks).',
                        'features' => ['Daily newspaper analysis and military affairs briefing', 'Grammar rules, sentence reconstruction, and vocabulary building', 'High-weightage geography and Indian national movement lectures', 'Negative marking management strategies']
                    ],
                    [
                        'subject' => 'SSB Interview & Physical Conditioning',
                        'faculty' => 'Retired Defence Officers (Colonels & SSB Assessors)',
                        'coverage' => 'Stage 1 Screening (OIR & PPDT), Psychological Tests (TAT, WAT, SRT), GTO Ground Tasks, Personal Interview.',
                        'features' => ['Permanent on-campus GTO ground with 15 standard obstacles', 'Daily morning 5 km run, push-ups, chin-ups, and agility training', 'Mock interview sessions conducted by experienced interviewing officers', 'Group discussion forums on national security and international relations']
                    ]
                ],
                'dailyRoutine' => [
                    ['time' => '05:30 AM - 06:45 AM', 'activity' => 'Morning Physical PT, Running Drills & Obstacle Practice'],
                    ['time' => '07:00 AM - 07:45 AM', 'activity' => 'High-Calorie Nutritious Mess Breakfast'],
                    ['time' => '08:00 AM - 01:30 PM', 'activity' => 'UPSC Written Classroom Academic Lectures'],
                    ['time' => '01:30 PM - 02:30 PM', 'activity' => 'Lunch & Mandatory Rest'],
                    ['time' => '02:30 PM - 05:00 PM', 'activity' => 'Mathematics Problem Sheets & GAT Practice'],
                    ['time' => '05:00 PM - 06:30 PM', 'activity' => 'Outdoor Sports, GTO Tasks & Drill Ground'],
                    ['time' => '07:00 PM - 08:30 PM', 'activity' => 'Group Discussion (GD), Lecturette & English Grooming'],
                    ['time' => '08:30 PM - 09:30 PM', 'activity' => 'Dinner in Defence Mess'],
                    ['time' => '10:00 PM', 'activity' => 'Tattoo Call & Lights Out']
                ],
                'hostelInfo' => [
                    'title' => 'Military-Disciplined Residential Barracks',
                    'desc' => 'Structured residential hostel modeled on premier defence training academies with daily roll calls, inspection, wholesome high-energy diets, and zero mobile phone distractions.',
                    'features' => ['Dietitian-supervised meals rich in eggs, milk, nuts, and fresh produce', 'Strict military discipline and punctuality under resident ex-servicemen', 'Modern shooting range, obstacle track, and synthetic sports facilities', 'Regular motivational seminars by serving and retired armed forces officers']
                ],
                'scholarshipInfo' => [
                    'test' => 'Prince Defence Talent Scholarship & P-SAT',
                    'fund' => 'Special Wards of Defence Personnel & War Widows Concession',
                    'waiver' => 'Up to 100% Complete Training & Hostel Fee Waivers',
                    'boardCriteria' => 'Direct fee benefits for children of martyrs, armed forces, and police personnel'
                ],
                'toppers' => [
                    ['name' => 'NDA Recommended Cadets', 'rank' => 'AIR 14 (NDA)', 'exam' => 'UPSC NDA / NA', 'college' => 'National Defence Academy, Khadakwasla', 'avatar' => null],
                    ['name' => 'Vikram Singh', 'rank' => 'SSB Recommended', 'exam' => 'Indian Military Academy (IMA)', 'college' => 'Dehradun', 'avatar' => null],
                ]
            ]
        ];
    }

    public function index()
    {
        $courses = array_values(self::getCoursesData());

        return Inertia::render('Courses/Index', [
            'courses' => $courses,
            'meta' => [
                'title'       => 'PCP Sikar Courses & Programs 2026-27 | NEET, IIT-JEE, Pre-Foundation, NDA',
                'h1'          => 'Academic Programs & Coaching Courses — PCP Sikar & Prince Eduhub',
                'description' => 'Explore premier classroom and residential coaching programs for NEET-UG, IIT-JEE (Main+Adv), Pre-Foundation (5th-10th), and Prince Defence Academy (NDA) in Sikar and Jaipur.',
                'url'         => url('/courses'),
            ],
        ]);
    }

    public function show($slug)
    {
        $data = self::getCoursesData();

        // Check aliases
        $aliasMap = [
            'neet' => 'neet-ug',
            'medical' => 'neet-ug',
            'jee' => 'iit-jee',
            'engineering' => 'iit-jee',
            'foundation' => 'pre-foundation',
            'junior' => 'pre-foundation',
            'nda' => 'nda-defence',
            'defence' => 'nda-defence',
        ];

        $targetSlug = $aliasMap[$slug] ?? $slug;

        if (!isset($data[$targetSlug])) {
            // If someone requested an unknown slug, redirect to /courses
            return redirect('/courses');
        }

        $course = $data[$targetSlug];
        $allCourses = array_values($data);

        return Inertia::render('Courses/Show', [
            'course' => $course,
            'allCourses' => $allCourses,
            'meta' => [
                'title'       => $course['title'] . ' | PCP Sikar & Prince Eduhub',
                'h1'          => $course['title'],
                'description' => $course['description'],
                'url'         => url('/courses/' . $course['slug']),
            ],
        ]);
    }
}
