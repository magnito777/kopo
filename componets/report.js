import React, { useEffect, useState } from "react";
import Markdown from "react-native-markdown-display";
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
import { ScrollView,} from "react-native";


export default function Report () {
 
 const markdown = `
 # Demographic characteristics of Orthopaedic Injuries Sustained in Motorcycle Accidents at Queen Elizabeth Hospital

A total of 125 patients with Motorcycle Accident were recruited into the study. Among those excluded from the study were those with missing information in their file, e.g. age, radiographs and those who were unable to give consent and had no guardians to consent on their behalf. Majority (75.2%) of them were male and 24.8% were female (M:F ratio 3:1). The mean age of the patients was 34.8±10.5 years, with a median age of 32 years (Table 6) and an age range of 21-61 years. The modal age group affected was 21-30 years (45.2%).

Sixty-nine (44.8%) presented at the hospital directly from the scene of the crash, while 56 (55.2%) were referrals from other facilities. Majority of the patients (71.2%) resided within Blantyre district, had attained primary (48.4%), secondary (33%), tertiary (15.3%) level education and no attend school (3.2%).

The majority (45.6%) were operators (riders), followed by passengers (37.6%) and pedestrians (16.8%).

| Role       | Frequency | Percentage |
|------------|-----------|------------|
| Passenger  | 47        | 37.6%      |
| Pedestrian | 21        | 16.8%      |
| Operator   | 57        | 45.6%      |

Approximately half of the patients (51.6%) were kabaza riders by occupation. Of these, 36 (89.6%) were operating with no driving license. The average years of experience of the riders was 6.1±3.8 years.

There were no female motorcycle rider patients found in this study. A third of the patients reported their occupation as casual laborers, and the rest included students, farmers and self-employed persons.
| Characteristic | Level | All Patients | Motorcycle Rider/Operator | Pedestrian | Passenger | p-value |
|----------------|-------|--------------|---------------------------|------------|-----------|---------|
| Total N (%)    |       | 125          | 57 (45.6)                 | 21 (16.8)  | 47 (37.6) |         |
| Age Median (IQR) |     | 30.0 (24.0 to 37.0) | 31.0 (26.0 to 36.0)  | 36.0 (24.0 to 50.0) | 23.5 (21.0 to 27.5) | <0.001   |
| Age Group      | ≤20 years | 9 (7.2)  | 2 (3.5)                   | 3 (14.3)   | 4 (8.5)   | <0.001   |
|                | 21-30 years | 57 (45.6) | 28 (49.1)              | 7 (33.3)   | 22 (46.8) |         |
|                | 31-40 years | 38 (30.4) | 26 (45.6)              | 7 (33.3)   | 5 (10.6)  |         |
|                | 41-50 years | 14 (11.2) | 7 (12.3)               | 6 (28.6)   | 1 (2.1)   |         |
|                | >50 years   | 7 (5.6)  | 2 (3.5)                 | 6 (28.6)   | 0 (0.0)   |         |
| Sex            | Male      | 108 (86.4) | 57 (100.0)              | 15 (71.4)  | 36 (76.6) | <0.001   |
|                | Female    | 17 (13.6)  | 0 (0.0)                 | 6 (28.6)   | 11 (23.4) |         |
| Occupation     | Motorcycle Rider | 57 (45.6) | 57 (100.0)         | 0 (0.0)    | 0 (0.0)   | <0.001   |
|                | Casual Labourer | 34 (27.2) | 0 (0.0)            | 19 (90.5)  | 15 (31.9) |         |
|                | Small-bussness | 26 (20.8) | 0 (0.0)             | 2 (9.5)    | 24 (51.1) |         |
|                | Employee-public-or-private | 11 (8.8) | 0 (0.0) | 0 (0.0)    | 11 (23.4) |         |
|                | Farmer | 8 (6.4) | 0 (0.0)                      | 0 (0.0)    | 8 (17.0)  |         |
|                | Student | 6 (4.8) | 0 (0.0)                     | 0 (0.0)    | 6 (12.8)  |         |
| Education Level | None     | 4 (3.2)  | 2 (3.5)                   | 2 (9.5)    | 0 (0.0)   | 0.331    |
|                | Primary  | 62 (49.6) | 31 (54.4)                | 18 (85.7)  | 13 (27.7) |         |
|                | Secondary | 50 (40.0) | 24 (42.1)               | 1 (4.8)    | 25 (53.2) |         |
|                | Tertiary | 9 (7.2)  | 0 (0.0)                   | 0 (0.0)    | 9 (19.1)  |         |
| Referral Status | No      | 48 (38.4) | 26 (45.6)                | 11 (52.4)  | 11 (23.4) | 0.866    |
|                | Yes      | 77 (61.6) | 31 (54.4)                | 10 (47.6)  | 36 (76.6) |         |
| Mode of Evacuation | Ambulance | 30 (24.0) | 15 (26.3)            | 7 (33.3)   | 8 (17.0)  | 0.810    |
|                | Police Vehicle | 7 (5.6) | 2 (3.5)              | 1 (4.8)    | 4 (8.5)   |         |
|                | Private Vehicle | 79 (63.2) | 40 (70.2)          | 13 (61.9)  | 26 (55.3) |         |
|                | Motorbike | 6 (4.8) | 0 (0.0)                   | 0 (0.0)    | 6 (12.8)  |         |
| Time-to-Presentation at QECH (hours), Median (IQR) | | 3.4 (2.0 to 6.0) | 3.0 (2.0 to 6.0) | 3.6 (2.0 to 6.0) | 3.2 (1.9 to 5.3) | 0.641    |
| Time-to-Presentation at QECH (hours), ≤3 hours | | 57 (45.6) | 29 (50.9) | 10 (47.6) | 18 (38.3) | 0.398    |
| Time-to-Presentation at QECH (hours), >3 hours | | 68 (54.4) | 28 (49.1) | 11 (52.4) | 29 (61.7) |         |

*Chi-Squared (χ²) or Fisher’s Exact test p-value; Statistically significant codes p <0.01; p <0.05*
*IQR, interquartile range (25th and 75th percentiles)*

# Circumstances of the injuries

Most of the motorcycle crashes occurred within Blantyre (n=89 patients, 71.2%). The commonest scenes (road) of MCC were 	M1 road (n=9 patients, 8.57%), Machinjiri road (n=5  patients, 4.76%) and Midima Road (n=4 patients, 3.80%). Most of the Motor cycle accidents occurred between 07:00 hours and 19:00 hours (n=90, 72.0%). Motorcycle operators (riders) constituted about half of the injured patients (n=57, 45.6%), while passengers and pedestrians comprised 37.6% (47 patients) and 16.8% (21 patients) respectively. Majority of the injured patients were evacuated from the scene of accident by Private (n=79 patients, 63.2%), while the rest were evacuated by ambulance (n=30 patients, 24.0%) and police vehicles (n=7 patients, 5.6%). The median time from injury to arrival to hospital was 3.4 hours (IQR 2-6 hours) The median time from injury to arrival to hospital was 2.8 hours (IQR 6.0 hours).



# Mechanism of injury in MCC-related musculoskeletal injuries

The commonest motorcycle crash type was collision with a motor vehicle (n=42 patients, 35.3%), followed by collision with motorcycle (n=18 patients, 15.1%), fall from motorcycle (n=35 patients, 29.4%) and collision with a animal (n=3 patient, 2.5%). The most predominant mechanism of injury was collision (n=60 patients, 50.4%),  (p<0.001).



![alt text](image.png)


            

| Age Group  | Collision with Oxcart | Collision with Animal | Collision with Motor Vehicle | Collision with Motorcycle | Collision with Stationary Thing | Fall from Motorcycle | Got Stuck in Spokes | Hit Along the Road |
|------------|----------------------|----------------------|----------------------------|--------------------------|------------------------------|----------------------|---------------------|------------------|
| ≤20 years  | 0                    | 0                    | 2                          | 2                        | 0                            | 6                    | 0                   | 0                |
| 21-30 years| 0                    | 0                    | 18                         | 4                        | 1                            | 9                    | 0                   | 0                |
| 31-40 years| 1                    | 1                    | 12                         | 8                        | 2                            | 6                    | 0                   | 0                |
| 41-50 years| 0                    | 2                    | 7                          | 2                        | 1                            | 6                    | 1                   | 1                |
| >50 years  | 0                    | 0                    | 3                          | 2                        | 0                            | 8                    | 0                   | 0                |

 
 `





  return (
    <Animated.View
                    entering={SlideInDown}
                    style={{
                        width: '90%',
                        height: '90%',
                        alignSelf: 'center',
                        marginTop: 50,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        overflow: 'hidden',
                    }}
                >
   
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ height: "100%", width: "200%" }}>
        <Markdown>{markdown}</Markdown>
      </ScrollView>
      </Animated.View>
  );
}
