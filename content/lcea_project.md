---
title: Identifying Energy-Vulnerable Communities for a Building Decarbonization Survey
tags:
- building decarbonization
- arcgis
- past projects
---

## What's happening?

Electrification of residential single-family and multi-family homes can reduce air pollution and slow down climate change. However, installation of new appliances can be costly for low-income households of color. Furthermore, landlords who electrify their properties may pass on the cost of electrification to their tenants, which may possibly lead to eviction. To understand the needs of vulnerable communities when it comes to building electrification, Local Clean Energy Alliance (LCEA), a community organization in Oakland, CA, is conducting a survey of tenants, homeowners, and landlords to understand the current issues they face with energy affordability and household appliances. With that knowledge, they can advocate for equity measures in building decarbonization to ensure that these policies won't backfire on vulnerable communities.

I worked with Local Clean Energy Alliance to develop a metric to 1) identify energy-vulnerable census tracts within Alameda and San Joaquin Counties to target in the survey and 2) identify community-based organizations that serve these areas and can help distribute the survey to the residents they serve.

## What did I do?

My initial inspiration was CalEnviroScreen, which is already used to identify disadvantaged communities to receive funding for climate resilience projects. CalEnviroScreen integrates several health and environmental indicators, such as air pollution and cardiovascular disease, into one overall score. However, CalEnviroScreen has received criticism for overlooking certain disadvantaged communities, such as in Chinatown. With 23 indicators, the importance of each metric is small, and these communities may score high on certain indicators and lower on others, diluting their overall score.

Therefore, I kept the number of indicators for an energy vulnerability score low. I ultimately chose:
- **Pollution**, which can be a proxy for race. Industrial facilities, highways, and other high polluting areas are often built near redlined, low income, and marginalized immigrant communities. I used CalEnviroScreen 4.0 data of PM 2.5, which was collected via satellite.
- **Linguistic isolation**. We wanted to target communities who faced language barriers. English-only communication and marketing of building decarbonization rebate programs may completely miss these communities, and we wanted to survey them about their awareness of these programs, and their preferred methods of communication. I used CalEnviroScreen 4.0 data.
- **Affordability**. Since people experiencing poverty often have to prioritize certain bills at the cost of others, such as rent and utilities, I chose two different metrics that were relevant: Average Household Energy Financial Burden, which was calculated by the CEC, and Housing Burden, which was calculated via CalEnviroScreen. Since I wanted to find communities who scored high in either of these categories, for each census tract, I chose the higher of the two Burden scores.
Our target were the census tracts who had the top 50 highest scores in Pollution, Linguistic Isolation, and Affordability – so ideally, low income, immigrant communities of color.

After finding the top 50 most vulnerable communities, I then identified the corresponding zip codes for these census tracts. Using a list of community based organizations that LCEA had, I filtered for organizations whose addresses were in these zip codes. LCEA staff used the final list of organizations for email outreach for their survey.