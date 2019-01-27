# Resources

This is a list of categorised resources for the sustainable energy sector. Some notes:

- The list started for research while applying for grant in the UK so most resources make sense for this market.
- We are focusing on electricity data exchange, so most of the resources see the problem from this point of view.
- Categories have grown organically with content, they don't follow a specific taxonomy and are subject to change.

If you're reading this from Github, this page is available in a [nicer web format here](https://piazza.energy/curated-resource-list/)

## Standards

This section is embarrassingly short, but reflects quite well the reality of things: there are very few standards around, with most of the platforms using proprietary solutions.

- [SMETS2](https://www.gov.uk/government/consultations/smart-metering-equipment-technical-specifications-second-version) smart meter specs v2 adopted by UK
- [IEEE P825](https://standards.ieee.org/project/825.html) - Guide for Interoperability of Transactive Energy Systems with Electric Power Infrastructure
- [European Energy Flexibility Platform and Interface (EF-PI)](https://flexible-energy.eu/) - [link docs](http://fpai-ci.sensorlab.tno.nl/builds/fpai-documentation/development/html/) not really a standard, more a consortium of private companies trying to adopt a common toolset.

## Software Platforms

Platforms focusing on demand side response, asset management and optimisation, flexibility, marketplaces

- [Verv energy](https://verv.energy/news/) is a trading name of [Green running](https://www.greenrunning.com/about-us/) recently raised on £1M+ on Crowdcube, providing electricity data [disaggregation](https://www.youtube.com/watch?v=ZnJeA4-42W4) on signals with resolution of 1s. Verv has also a blockchain solution (see dedicated section).
- [EnergyOS](https://www.energyos.com.au/) is the platform built on top of research done by CSIRO (Australia) for their [grid modelling tools](https://www.csiro.au/en/Research/EF/Areas/Electricity-grids-and-systems/Intelligent-systems)
- [Flexible power / powermatcher](https://github.com/flexiblepower) is the open source platform released by EF-PI (see above standard section, not really a standard though)
- [Advmicrogrid](http://www.advmicrogrid.com/) Analytics platform for demand side response and asset management with machine learning, advanced microgrid solutions (closed source), big US based
- [Genability](https://www.genability.com/) Big US based products and platform for assets, micro-grids, etc. management with machine learning
- [auto-grid](https://www.auto-grid.com/) Massive US based company (recently had 20M+ in funding) building platform for assets management, optimisation, machine learning etc. [link youtube](https://youtu.be/MIijeMOPlBY)
- [AMPP](https://www.ammp.io/) - Analytics and insights for off-grid assets
- [Piclo](https://piclo.energy/), Grid flexibility marketplace Platform
- [Eloncity](https://eloncity.io/) - Mega platform (under development) Singapore based with blockchain and devices
- [Utility API](https://utilityapi.com/),  Web api platform for energy consumption and bills
- Mh, not really sure what they do? [Reactive technologies](https://www.reactive-technologies.com/) grid analytics and cloud solutions maybe? Been [funded by Ingenious](http://www.theingeniousgroup.co.uk/news-views/ingenious-backs-smart-energy-future-with-investment-into-reactive-technologies/)
- [Upside energy](https://upsideenergy.co.uk/about-us/) Cloud software for demand side response with AI
- [Qbots](https://www.qbots.ai/#how) AI + API but don’t think they have anything released open source
- [GridMarket](https://app.gridmarket.com/) app for microgrid monitoring mentioned by [link](https://microgridknowledge.com/worlds-largest-microgrid-engie-eps/) for their installation in Palau (Micronesia)
- [Sighten](http://www.sighten.io/) Platform for solar workflow management, from planning, financing, installation, monitoring, support
- [Leap](https://leap.ac/) Off-peak energy trading platform, funded by national grid

### DER / DSR Platforms

- [Faraday grid](https://www.faradaygrid.com/the-faraday-grid/) Edinburgh based, backed by WeWork co-founder and Amp Energy - [in the news](https://theenergyst.com/faraday-grid-lands-25m-investment/) -, providing hardware + software for DER
- [Opus one](https://www.opusonesolutions.com/) Toronto based, DER and DSR platform
- [Enbala](https://www.enbala.com/technology/products-solutions/) Vancouver + Denver based platform for virtual power plant and DSR optimisation
- [Sympower](https://www.sympower.net/about/our-story) Demand response aggregation platform
- [Voltus](https://www.voltus.co/how-we-help/) Demand side response and energy efficiency platform

### Building performance / monitoring / analytics

- [Simptek](https://www.simptekinc.com/) Canadian company, provides insights into any building’s energy usage, identifying opportunities for cost savings
- [Sefaira](https://sefaira.com/)
- [Demand Logic](https://www.demandlogic.co.uk/index.html) is an energy control and optimisation platform for commercial buildings, similar to Fabriq.
- [Fabriq](https://fabriq.space/services/fabriq-platform/) Building / Assets Energy monitoring platform
- [EnergyPlus](https://energyplus.net/) is a whole building energy simulation program that engineers, architects, and researchers use to model both energy consumption—for heating, cooling, ventilation, lighting and plug and process loads—and water use in buildings. Funded by the U.S. Department of Energy’s (DOE) Building Technologies Office (BTO), and managed by the National Renewable Energy Laboratory (NREL)
- [Systems Link](https://www.systems-link.com/) is owned by Inspired Energy (see below in the companies section) and is a full energy monitoring platform with support for tenants

### Blockchains

- [Vlux](https://vlux.io/) is the blockchain that powers Verv (see section above)
- [Power ledger](https://www.powerledger.io/#products) just won (oct 18) the extreme tech challenge XTC
- CSIRO is doing something but not sure what's the status, there is an interesting [https://www.data61.csiro.au/en/our-work/safety-and-security/secure-systems-and-platforms/blockchain](article) with scenarios
- [Echoin from Powerlinks](https://www.echoin.io/) Beijing based, contracts with EDF, presented at Mission Innovation workshop
- [Electron](http://www.electron.org.uk/) London based, presented at Mission Innovation workshop
- Blockchain powered Carbon credits produced by solar and consumed in micro-grid, [Dajie](https://www.dajie.eu/)

## Hardware platforms

big section with sub categories

### IoT & Smart home

Smart home, energy monitors integrated with other stuff

- [Home Connect](https://www.home-connect.com/global/connected-partners/energy_management) is the iot very proprietary platform by Bosch, device management and optimisation with a set of selected partners
- [Hive](https://www.hivehome.com/) smart home device range, started with thermostat, bought by Centrica / British Gas
- [Nest](https://nest.com/uk/) notoriously bought by Google, started as thermostat only, progressively expanded to smart home
- [Develco](https://www.develcoproducts.com/products/) Denmark based, gateway, controlled socket, relays, pass through, sensors. All Zigbee connected, quite amazing
- [Lightwave rf](https://lightwaverf.com/) controlled and connected power sockets, switches, sensors, radiator valves. They claim to do energy monitoring, but haven't found anything on website.
- [Netatmo](https://www.netatmo.com/en-us) smart thermostat, air quality monitor, smoke detector, radiator valves, indoor / outdoor camera
- [Gridduck](https://gridduck.com/#main) UK based cloud energy management platform with devices developed on top of Develco (see above). Listed for winning 360k in funding for gamification of EV charging in the south-korea collaboration, [link](https://www.gov.uk/guidance/funding-for-innovative-smart-energy-systems) founder and CEO is [Gregor](https://www.linkedin.com/in/gregor-hoefter-8bb77/)
- [Asema](https://iot.asema.com/iotc/) is a smart-energy iot platform with sensors and dashboards, not sure it's on the market already. They also have an [open API](http://www.smart-api.io/)

### Smart Thermostats

- [Switchee](http://switchee.co/)
- [Tado](https://www.tado.com/) Germany rising, mentioned in the Reuters article (see below)
- [Ecobee](https://www.ecobee.com/) canada based, with v. interesting “donate your data” program

### Energy monitors / controllers

- [kiwipowered](https://www.kiwipowered.com/products/fruit/) a circuit breaker with monitor functionality, mainly for industrial clients
- [efergy](https://efergy.com/) wire clamps, controlled sockets, webapp
- [sense](https://sense.com/) wire clamps, installed in the fuse box
- [geotogether](https://www.geotogether.com/) wire clamps, controlled sockets, thermostats, solar (mentioned in the solar/battery section by Ikea, indicates when to switch on/off appliances), consumer + business
- [smappee](https://www.smappee.com/) wire clamps, webapp, claims to disaggregate by appliance
- [neur.io](https://www.neur.io/) wire clamps, webapp, solar
- [Open energy monitor](https://guide.openenergymonitor.org/applications/home-energy/) Open source home energy / solar / heat pump / EV charging monitor with their CMS [emocms](https://emoncms.org/)
- [rialtocomfort](https://www.rialtocomfort.com/) wire clamps, thermostats, webapp
- [watty](https://watty.io/order) Monitor, mainly a mobile app? Based in Sweden, Not sure how it works
- [voltaware](https://www.voltaware.com/how-it-works) Energy monitor, very rudimental website, not clear if they have a device

### Low level Sensors, Circuits, Relays, etc.

- [Veris](https://www.veris.com/Category/Current-spcMonitoring.aspx)
- [lechacal for Raspberry pi](http://lechacal.com/wiki/index.php/Raspberrypi_Current_and_Temperature_Sensor_Adaptor)
- [Gewiss](https://www.gewiss.com/ww/en/products/experience-catalogue/catalogs/series/domotics/wireless-devices-Zigbee) Zigbee series
- [Bega](https://www.bega.com/en/products/Zigbee-control-modules-71021/) 16A Zigbee relay
- [Pikkerton](https://www.pikkerton.com/_objects/1/16.htm) Zigbee relay
- Search [google images](https://www.google.co.uk/search?q=Zigbee+din+relay) for Zigbee din relay there are tons!

### Batteries / static storage

- [Blue planet energy](https://blueplanetenergy.com/) Hawaii based storage for residential
- [Connected Energy]((https://www.c-e-int.com/)), recycling EV batteries but for commercial and industrial
- [Argonaut Power](https://www.argonautpower.com/) specialising in batteries, ingenious spin-off providing financial service
- [PowerVault](https://www.powervault.co.uk/) for residential, recycling EV batteries
- [FIAMM](https://www.fiamm.com/en/europe/) Italian battery company, part of the Hitachi group, historically for vehicles, now shifting towards other markets
- [PowerFlow](https://www.powerflowenergy.com/)
- [Sonnen](https://sonnen-batterie.com/en-us/start)
- [Tesla powerwall](https://www.tesla.com/en_GB/powerwall)
- [landlord energy solutions](http://www.landlordenergysolutions.org/) is a new startup developing batteries and renewable projects at large for landlords, they are probably both product and consultancy, a bit like Spectral (above), founder [Reg Platt](https://www.linkedin.com/in/reg-platt-11a38321/)
- [Power Blox](https://www.power-blox.com/) the Swiss guys working on projects for Africa / developing countries, CTO and Co-Founder is [Alessandro Medici](https://www.linkedin.com/in/alessandro-medici-90a91030/)
- [Nant energy](https://nantenergy.com/company/) **Zinc batteries** aiming 100$/kwh has been recently featured in [ny times](https://www.nytimes.com/2018/09/26/business/energy-environment/zinc-battery-solar-power.html)

### Photovoltaic

- [BBoxx](https://www.bboxx.co.uk/) hardly can be defined a PV or a battery company, they provide a solar + battery + monitoring solution for developing countries, London based
- [sma](https://www.sma-uk.com/) german company, with [data management platform](https://www.sma.de/en/products/monitoring-control/data-manager-m.html)
- [polysolar](http://www.polysolar.co.uk/)
- [ikea](https://www.ikea.com/gb/en/ikea/solar-panels/)
- [solar century](https://www.solarcentury.com/)
- [evo energy](https://www.evoenergy.co.uk/services/power-purchase-agreement/) check their PPA (min 200 panels / 40kwp, recommend epc certificate)
- [enphase](https://enphase.com/en-us) (US)
- [sunpower](https://us.sunpower.com/) (US)
- [bticino photovoltaic](https://www.bticino.com/products-catalogue/photovoltaic-systems-string-boxes-circuit-breakers-and-fuses/)

## Business & Money

Business hubs / accelerators / funds / etc

## VC & funds

- Bill Gates & Friends $1B Breakthrough Energy fund [t h e s e g u y s](http://www.b-t.energy/coalition/) check the landscape section for ideas. Trickling down to Europe [link](http://europa.eu/rapid/press-release_IP-18-6125_en.htm)
- [EnBW](https://www.env.vc/index-1.html) new ventures 100M fund
- Mayor of London energy efficiency fund (MEEF) [link](https://www.amberinfrastructure.com/our-funds/the-mayor-of-londons-energy-efficiency-fund/about-meef/)
- [wunder capital](https://www.wundercapital.com/) Investment fund specialised in cleantech
- [Kleiner Perkins Caufield & Byers](http://www.kleinerperkins.com/) is regarded as one of the prominent VC in cleanTech, albeit going through some troubles, according to [Reuters](https://www.reuters.com/article/us-kleiner-doerr-venture/insight-how-cleantech-tarnished-kleiner-and-vc-star-john-doerr-idUSBRE90F0AD20130116)
- National grid announced fund [link](https://news.crunchbase.com/news/utility-national-grid-launches-venture-arm-powered-by-250m-fund/)

### Accelerators

- [Clean and cool](https://cleanandcool.org/) not properly accelerator program, probably more a networking series of events
- [EIC climate kic](https://www.climate-kic.org/programmes/entrepreneurship/) the program on climate change run by the European Institute of Innovation & Technology **loads of startups**
- [Sustainable accelerator](https://www.sustainableaccelerator.co.uk/), London based, they also have a fund on seedrs. I think they back PowerVault
- [Sustainable bridges](http://www.sustainablebridges.co.uk/) / [Workspaces](https://www.sustainableworkspaces.co.uk/) it's the shared space where the accelerator operates (I think, will pay a visit soon)
- Seed and co-working in Oakland, CA [link](https://powerhouse.fund/#landing)
- Hawaii / California / Pacific accelerator [Elemental](https://elementalexcelerator.com/) last cohort started oct 18
- List of accelerators and incubators, in theory in cleantech but covering all sorts [link](https://www.londoncleantechcluster.co.uk/london-cleantech-cluster-2/cleantech-business/)
- Generic list of accelerators in London [link](https://hubblehq.com/blog/the-official-list-of-londons-business-accelerators-and-incubators)
- [Digital Catapult](https://www.digicatapult.org.uk/) there's also the energy catapult, check the link
- [R/GA](http://ventures.rga.com/startups/) they're in the IoT sector, possibly green

### Public Funding & Grant opportunities

These are mainly in the UK, by no means providing extensive global coverage

- [Better Future](https://www.london.gov.uk/what-we-do/environment/better-futures/about-better-futures) EU regional development fund
- Optimise Prime by NIC / Ofgem [link](https://www.ofgem.gov.uk/publications-and-updates/electricity-nic-2018-submission-ukpn-optimise-prime) data for EV as referenced [link](https://www.wired.co.uk/article/electric-cars-uk-worlds-biggest-trial)
- [BEIS industrial energy efficiency accelerator](https://www.carbontrust.com/client-services/programmes/industrial-energy-efficiency-accelerator/)  Department of Business, Energy and Industrial Strategy’s £9.2 million fund
- [gov.uk smart energy](https://www.gov.uk/guidance/funding-for-innovative-smart-energy-systems) where references to Power Forward Challenge can be found
- [gov.uk climate change](https://www.gov.uk/government/news/call-for-new-green-innovations-to-tackle-climate-change) £60M fund announced during [green GB](https://greengb.campaign.gov.uk/) week, mid oct 18. Section "Constructing a Digital Environment" might be of interest, competitions to be published [here](https://www.ukri.org/research/themes-and-programmes/)
- [gov.uk prospering from energy revolution](https://www.gov.uk/government/news/prospering-from-the-energy-revolution-full-programme-details), competition [closed july 18](https://www.gov.uk/government/news/design-and-trial-smart-energy-systems-apply-for-funding)
- [gov.uk entry point](https://www.gov.uk/business-finance-support)
- [gov.uk competitions in energy](https://apply-for-innovation-funding.service.gov.uk/competition/search?keywords=energy)

## Companies / Consultancies / Startups / Organisations

these are companies and organisations making a living with the green / sustainable / climate change / etc. business that don't have a specific software or hardware product.

- [Elli](https://www.elli.eco/en/#mission) is the "Electricity Life" brand owned by VW group, announcing their [intention to become a power supplier](https://www.volkswagen-newsroom.com/en/press-releases/volkswagen-to-become-a-power-supplier-4551)
- [Bloomberg NEF](https://about.bnef.com/) "new energy finance" is the branch of Bloomberg specialised in consultancies around the energy sector, this was a company founded by [Michael Liebreich](https://twitter.com/MLiebreich) in 2004 and acquired by Bloomberg in 2009
- [GRESB](https://gresb.com/about/) mh, not sure this is a corp, or an org, their mission is to enhance and protect shareholder value by assessing and empowering sustainability practices in the real asset sector. Providing environmental, social and governance (ESG) performance on assets. (mentioned in Fabriq newsletter)
- [Metabolic](https://www.metabolic.nl/) did the Smart Integrated Decentralised Energy (SIDE) systems research published by [world economic forum](https://www.weforum.org/agenda/2018/09/these-dutch-microgrid-communities-can-supply-90-of-their-energy-needs/)
- [Spectral](https://spectral.energy/projects/) a metabolic spin-off (nice domain), worth watching what they do [link on Youtube](https://www.youtube.com/watch?v=jB3hMVYXSKk) they should also have an energy monitoring platform a bit like Fabriq but not sure it’s PaaS
- [Carbon lighthouse](https://www.carbonlighthouse.com/) US based Commercial solar consultancy
- [kwhanalytics](http://www.kwhanalytics.com/) Investment risk management in solar, a platform
- [Lumenaza](https://www.lumenaza.de/en/) software company for energy flow
- [Energy Market Price](https://www.energymarketprice.com/) software and bespoke solutions for industrial / consultants / suppliers who need to track energy price (e.g. a dashboard for EDF)
- [Engadged Tracking](https://www.engagedtracking.com/) a new approach to sustainable and ESG investing, ranking the world’s largest listed companies according to their Scope 1, 2 and 3 greenhouse gas emissions each year.
- [Carbon Delta](https://www.carbon-delta.com/) funded by climate-kic, companies carbon footprint monitoring / environmental fintech
- Italy based consultancy [Energy way](https://www.energyway.it/energia-ambiente/) my friend Rita Cucchiara in the advisory board
- [Brixton energy](https://brixtonenergy.co.uk/about-us/) a tiny cooperative installing renewables in south london, I'm sure there's plenty but hey, I'm a Londoner :joy:
- [Eco Energi](https://www.eco-energi.com/) UK based service provider / consultancy for transition to sustainable, mainly residential
- [Pexapark](https://www.pexapark.com/team.html) is a Zurich based consultancy specialised in PPA deals
- [Nispera](http://nispera.com/) renewable portfolio performance monitoring, asset management, weather forecast for power, bespoke solutions
- [Digital Engineering](https://digital-engineering-ltd.com/) data analytics services for assets monitoring and forecasting, based in Bristol
- [Kyos](https://www.kyos.com/) asset management and optimisation, energy market analytics
- [Inspired Energy](https://inspiredenergy.co.uk/) Manchester based, super big company providing all sorts of professional services for energy distributors, businesses etc.

### Media

- [Business green](https://www.businessgreen.com/) uk based media and events in the cleantech world
- [The Energyst](https://theenergyst.com/) magazine featuring latest energy technology and strategies along with articles on legislative and policy changes.
- [Greenbiz](https://www.greenbiz.com/about-us) Media company interesting article about long-term sustainability of solar panel recycling

### NGO / Organisations / activism

bit of a bodged together category that wraps initiatives and "no-profit"

- [IEA](https://www.iea.org/) Founded in 1974, the IEA was initially designed to help countries co-ordinate a collective response to major disruptions in the supply of oil, such as the crisis of 1973/4. While this remains a key aspect of its work, the IEA has evolved and expanded significantly.
- [UNFCCC](https://unfccc.int/about-us/about-the-secretariat) United Nations Framework Convention on Climate Change organises the Conference of Parties, organised the [COP24](https://unfccc.int/katowice) event in Katowice, Poland Dec '18
- [Climate neutral now](https://offset.climateneutralnow.org/) carbon offset platform by United Nations [UNFCCC](https://unfccc.int/)
- [CDP](https://www.cdp.net/en) is a not-for-profit charity that runs the global disclosure system for investors, companies, cities, states and regions to manage their environmental impacts
- [Mission Innovation](http://mission-innovation.net/events/) 24 government consortium, recently presented the SGIA accelerator, ties with B-T ventures
- [Ofgem](https://www.ofgem.gov.uk/about-us/who-we-are) gas & electricity market authority
- [Ashden](https://www.ashden.org/) organisation with award and funding, check the eligibility criteria
- [Action sustainability](https://www.actionsustainability.com/product/energy-and-carbon/)
- supporting nuclear [environmental progress](http://environmentalprogress.org/), really good newsletter, the guy writes on Forbes
- [UK100](https://www.uk100.org/) clean communities
- [Royal Society](https://royalsociety.org/topics-policy/projects/greenhouse-gas-removal/)
- [Client earth](https://www.clientearth.org/)- check their survey UK 20.8.18 supporting urgent action on climate change: [link](https://www.clientearth.org/british-public-supports-urgent-action-and-litigation-on-climate-change-poll-reveals/) linked from  [link](https://www.independent.co.uk/environment/solar-panels-government-cuts-funding-british-tesla-a8500051.html)
- go low carbon contest [link](https://www.climatecolab.org/contests/2018/helping-small-medium-businesses-go-low-carbon-ontario)
- [Michael Liebreich foundation](http://www.liebreich.com/foundation/) gives small grants for climate & environment projects among other things
- [Carbon culture](https://platform.carbonculture.net/about/) community platform that is designed to help people use resources more efficiently. Doesn't seem super active.
- [NIPCC](http://climatechangereconsidered.org/) basically the climate change "negationist", a panel of nongovernment scientists and scholars who have come together to present an assessment of the science and economics of global warming.

### Meteo / Power forecast

- [Meteomatics](http://www.meteomatics.com/display/WELCOME/Home) specializes on the specific needs of the weather sector, energy and trading sectors
- [Energy weather](https://www.energyweather.com/) Germany based
- [Watt sight](https://www.wattsight.com/) Norway based, meteo and trading forecast
- [European power forecasting](https://europeanpowerforecasting.com/) probably a sister company of Digital Engineering mentioned above, Bristol based (same office), focusing on the power forecasting side
- [Conwx](http://conwx.com/) high-resolution historical weather data and forecast for power / TSOs / asset management

### Market compare

- [the eco experts](https://www.theecoexperts.co.uk/) for PV + battery installations. (Tried to make an enquiry but they’re just a call centre forwarding the contact to an installer, they wouldn’t even send the contact through without installation permission approval from the landlord. Been recommended to check on their website who can install in the area and contact them directly)
- [Labrador](https://www.thelabrador.co.uk/) like uswitch, has an option for green sources

## Energy Companies

Bunch of companies trading and distributing energy, having a special focus on sustainable / renewable, demand side response and the likes

- [Amp Energy](https://amp.energy/) Canadian, assets behind and in front of the meter, backers of Faraday Grid (see above)
- [Smartest Energy](https://smartestenergy.com/) they have an interesting periodic report in mailing list
- [Smarter business](https://smarterbusiness.co.uk/) energy broker for business
- [Octopus](https://octopus.energy/) London based, green easy to switch energy, there is probably a link with reactive-technologies that I haven’t understood
- [Trust power](https://www.trustpower.com/about-us) another solar / wind energy company to be launched soon
- [OVO energy](https://www.ovoenergy.com/) provider pledging to provide sustainable power and smart devices for heating optimisation, monitoring, etc.
- the new green aggregator jungle: check bulb, good energy, green star energy, solarplicity, so energy, outfox the market, pureplanet, tonic, co-operative, ...
- [EDF DSR](https://www.edfenergy.com/large-business/energy-solutions/demand-side-response-dsr) has a solution for demand side response
- [Limejump](http://www.limejump.com/) - Assets managers / demand side response platform / battery and other devices
- [Flexitricity](https://www.flexitricity.com/) direct Limejump competitors, monetise energy flexibility. I.e. an energy company that enables the balancing mechanism (check [this link on elexon](https://www.elexon.co.uk/guidance-note/balancing-mechanism-bm-units/))
- [Ecotricity](https://www.ecotricity.co.uk/) founder [Dale Vince on wiki](https://en.wikipedia.org/wiki/Dale_Vince) is worth checking out

## Subsidies / regulations / certifications

- [TERRE](https://consultations.entsoe.eu/markets/terre/) is the Trans European Replacement Reserves Exchange. From what I understood companies like Flexitricity or any other PPA can use this protocol to provide demand side response with a 15' cycle time. have no idea how they implement it though.
- Green deal (expired 2014) [link](https://en.wikipedia.org/wiki/The_Green_Deal)[link](https://www.gov.uk/green-deal-energy-saving-measures)
- energy performance certificate (private residence only?) [EPC register](https://www.epcregister.com/reportSearchAddressTerms.html) there’s also a data set here: [London domestic efficiency by boroughs](https://data.london.gov.uk/dataset/domestic-energy-efficiency-ratings-borough)
- [microgeneration](https://www.microgenerationcertification.org/) quality certification supported by BEIS
- [stroma certification](https://www.stroma.com/certification/) for epc, gas, etc...
- [BREEAM](https://www.breeam.com/) world’s leading sustainability assessment method + certification for masterplanning projects, infrastructure and buildings.

## Data sets and APIs

- [ENERGYDATA.INFO](https://energydata.info/) is an open data platform providing access to datasets and data analytics that are relevant to the energy sector.
- [Elexon](https://www.elexon.co.uk/) meters data harvesting and comparison, balancing and settlement code (bsc), **lots and lots of data!** They also have an API, check this out [link](https://www.elexon.co.uk/new-balancing-mechanism-reporting-service-bmrs/)
- Data sets [for the US](https://catalog.data.gov/dataset?tags=energy-consumption#sec-tags) (commercial and residential hourly load profile linked here - [link](https://catalog.data.gov/dataset/commercial-and-residential-hourly-load-profiles-for-all-tmy3-locations-in-the-united-state))
- energy consumption UK data set [link](https://data.gov.uk/dataset/26afb14b-be9a-4722-916e-10655d0edc38/energy-consumption-in-the-uk)
- 5.5k households smart meter half hour readings between nov 11 and feb 14 [link](https://data.london.gov.uk/dataset/smartmeter-energy-use-data-in-london-households)

## Other products

- energy capturing pavement / tiles [Pavegen](http://www.pavegen.com/product)
- ambient low-energy harvesting [Freevolt](http://www.getfreevolt.com/)
- monitoring solutions based on an automated analysis of geospatial information. (funded by climate-kic) [Earthcube](https://www.earthcube.eu/)

## General knowledge

- [How AI will affect the future](https://www.brookings.edu/research/how-artificial-intelligence-will-affect-the-future-of-energy-and-climate/) of energy and climate change
- the case for static storage: how Tesla big battery in Australia [provided a millisecond response](https://reneweconomy.com.au/tesla-big-battery-outsmarts-lumbering-coal-units-after-loy-yang-trips-70003/) to adjust frequency when a coal plant stopped working
- AEMO and ARENA [build a 200MW battery](https://www.aemo.com.au/Media-Centre/AEMO-and-ARENA-demand-response-trial-to-provide-200MW-of-emergency-reserves-for-extreme-peaks) for extreme peaks, twice the size of the Tesla big battery
- IPCC (intergovernmental panel on climate change) report on 1.5C released in early October 2018: [link](http://www.ipcc.ch/report/sr15/) this is the **badass doc** that worked as wake up call for loads of people
- [NASA](https://climate.nasa.gov/) I love you :heart:
- Current status of nuclear fusion (sept 18) [link](https://qz.com/1402282/in-search-of-clean-energy-investments-in-nuclear-fusion-startups-are-heating-up/)
- List of API energy related [link](https://www.programmableweb.com/category/energy/api)
- **Pandora’s box!** So much content here, loads of innovation projects and reports in a single place [link](http://innovation.ukpowernetworks.co.uk/innovation/en/) very interesting sections: low carbon London and smarter network storage in the large scale projects section
- Electricity System Operator UK [national grid eso](https://www.nationalgrideso.com/insights) another website full of content, innovation, fundings, etc. mainly from the TSO point of view
- An algorithm for [electrical grid mapping](https://code.fb.com/connectivity/electrical-grid-mapping/) by Facebook based on image analysis and a modified Dijkstra algorithm

### Energy consumption

- **energy flows** if you have to impress people using Sankey charts - Lawrence Livermore (world, but mainly updated for US) [link](https://flowcharts.llnl.gov/)
- BEIS energy trends [link](https://www.gov.uk/government/collections/energy-trends)
- Electric vehicle footprint [link](https://www.ucsusa.org/clean-vehicles/electric-vehicles/ev-emissions-tool), this is fun. Basically: buy a Prius instead of a Tesla
- Distributed energy resources and blockchain, Berkeley sudy [link](https://escholarship.org/uc/item/80g5s6df) linked from this article [link](https://blockchainatberkeley.blog/a-new-approach-to-decentralized-energy-5ab2b5460fa0)

### Business

- From BEIS, 8.8.18 “smart meters is the way to go” [link](https://www.gov.uk/government/news/smart-meters-the-smart-choice)
- [FTSE4good](https://www.ftse.com/products/indices/FTSE4Good) Luxottica is mentioned here [link](https://www.pambianconews.com/2018/08/02/luxottica-entra-nellindice-ftse4good-241982/)
- about better futures accelerator (see money & business section above) [link](https://techcrunch.com/2017/06/12/londons-mayor-announces-1-6m-clean-tech-incubator/)
- McKinsey report on changing utility landscape [link](https://www.mckinsey.com/industries/electric-power-and-natural-gas/our-insights/how-utilities-can-keep-the-lights-on)
- Happening in Germany [link](https://uk.reuters.com/article/us-eon-microsoft-smarthomes-focus/e-on-targets-innovations-for-smart-energy-future-idUKKCN1M80ID) and the e-on / Microsoft joint venture for energy monitoring dashboards
- Lists of startup to watch [quartz](https://qz.com/1402301/bill-gatess-1-billion-energy-fund-is-expanding-its-portfolio-of-startups-fighting-climate-change/) [wired](https://www.wired.co.uk/article/wired-energy-2017-startups) [techworld](https://www.techworld.com/picture-gallery/startups/uk-energy-tech-startups-3681877/)
- Breakthrough energy Europe announcement and breakdown of greenhouse gas source emissions [link on Gates notes](https://www.gatesnotes.com/Energy/My-plan-for-fighting-climate-change)

### Technologies, Solar efficiency, ripple effects, climate change, everything else

- [green energy storage](http://www.greenenergystorage.eu/en/battery/) an Italian company implementing a patented organic flow battery
- new [fluoride-ion battery](https://www.slashgear.com/honda-reveals-fluoride-battery-breakthrough-for-next-gen-power-storage-06557121/) tech from honda / jpl / caltech
- solar panel efficency [1](https://www.thetimes.co.uk/article/desert-sun-in-qatar-too-hot-for-solar-panels-to-work-h23kmktbp) [2](https://greentumble.com/effect-of-temperature-on-solar-panel-efficiency/)
- Warming from wind [link](https://www.technologyreview.com/s/612238/wide-scale-us-wind-power-could-cause-significant-warming/)
- Impact in climate change (loads of references) [world economic forum](https://www.weforum.org/agenda/2018/06/how-to-talk-about-climate-change-5-tips-from-the-front-lines) and  [good ol' Yates](https://www.quora.com/What-do-you-think-is-the-single-most-impactful-thing-an-individual-can-do-to-combat-climate-change/answer/Yates-Buckley)
- Sustainable energy without the hot air (book, pdf) [link](http://www.withouthotair.com/download.html)

## Unclassified

not sure if these links even belong to this document, found things while following line of thoughts that eventually landed to something loosely related

- [Domotz](https://www.domotz.com/) remote network monitor & mgmt
- [Smartgreenshop](https://smartgreenshop.co.uk/) marketplace with (too) broad range of goods, e.g. from energy monitors to eco laundry liquid
