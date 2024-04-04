import React from "react";
import Contact from "./Contact";
import "../css/Home.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="body">
        <div className="marq">
          Notification
          <marquee>
            Jalpaiguri disaster: Tornadoes a symptom of warming & anomalous wind
            patterns Bedevilled Barak: DTE reconstructs what went wrong in
            Katigorah during 2022 Assam floods Very heavy rain forecast in parts
            of Nagaland, Manipur, Mizoram and Tripura Cyclone Midhili to make
            landfall along Bangladesh Coast in early hours of November 18
            Cyclone Midhili to make landfall along Bangladesh Coast in early
            hours of November 18 Hamoon: Odisha prepares for brewing cyclonic
            storm; sends out warnings to farmers, fisherfolk Light to moderate
            rain is likely to lash the coastal districts of Odisha Isolated
            heavy rainfall over Mizoram and heavy to very rainfall over Tripura
            expected on October 23 and 24
          </marquee>
        </div>
        <div className="large">
          Navigate through crisis with ease - Explore our disaster management
          portal today!
        </div>
        <div className="main">
          <Link className="link" href="/Donate">
          <div className="box">
            <h1>
              I WANT TO <div className="large">DONATE</div>
            </h1>
          </div>
          </Link>
          <Link className="link" href="/Avail">

          <div className="box">
            <h1>
              I NEED <div className="large">HELP</div>
            </h1>
          </div>
          </Link>
        </div>
        <Link className="link" href="/Help">

      
        <div className="center">
          <div className="box1">
            <h1>
              I NEED
              <div className="large">
                IMMIDIATE HELP
              </div>
            </h1>
          </div>
        </div>
        </Link>
        <div className="container">
          <h1>Welcome to disaster management portal</h1>
          <p>
            Disaster is a serious disruption of the functioning of a community
            or society, which involve widespread human, material, economic or
            environmental impacts that exceed the ability of the affected
            community or society to cope using its own resources. Disaster
            management is how we deal with the human, material, economic or
            environmental impacts of said disaster, it is the process of how we
            “prepare for, respond to and learn from the effects of major
            failures”. Though often caused by nature, disasters can have human
            origins. According to the International Federation of Red Cross &
            Red Crescent Societies a disaster occurs when a hazard impacts on
            vulnerable people. The combination of hazards, vulnerability and
            inability to reduce the potential negative consequences of risk
            results in disaster
          </p>
          <h2>Types of Disasters</h2>
          <hr />
          <p>
            According to the International Federation of Red Cross & Red
            Crescent Societies Natural Disasters are naturally occurring
            physical phenomena caused either by rapid or slow onset events that
            have immediate impacts on human health and secondary impacts causing
            further death and suffering. These disasters can be:
            <ol>
              <li>
                Geophysical (e.g. Earthquakes, Landslides, Tsunamis and Volcanic
                Activity)
              </li>

              <li>Hydrological (e.g. Avalanches and Floods)</li>
              {/* <li>
                Climatological (e.g. Extreme Temperatures, Drought and
                Wildfires)
              </li> */}
              <li>Meteorological (e.g. Cyclones and Storms/Wave Surges)</li>
              <li>
                Biological (e.g. Disease Epidemics and Insect/Animal Plagues)
              </li>
            </ol>
            The United Nations Office for Disaster Risk Reduction characterises
            Natural Disasters in relation to their magnitude or intensity, speed
            of onset, duration and area of extent e.g. earthquakes are of short
            duration and usually affect a relatively small region whereas
            droughts are slow to develop and fade away and often affect large
            regions.
          </p>
          <h2>Man-Made Disasters</h2>

          <hr />
          <p>
            Man-Made Disasters as viewed by the International Federation of Red
            Cross & Red Crescent Societies are events that are caused by humans
            which occur in or close to human settlements often caused as a
            results of Environmental or Technological Emergencies. This can
            include:
            <ol>
              <li>Environmental Degradation</li>
              <li> Pollution</li>
              <li>
                Accidents (e.g. Industrial, Technological and Transport usually
                involving the production, use or transport of hazardous
                materials)
              </li>
            </ol>
          </p>
          <h2>Complex Emergencies</h2>
          <hr />
          <p>
            Some disasters can result from multiple hazards, or, more often, to
            a complex combination of both natural and man-made causes which
            involve a break-down of authority, looting and attacks on strategic
            installations, including conflict situations and war. These can
            include:
            <ol>
              <li>Food Insecurity</li>
              <li>Epidemics</li>
              <li>Armed Conflicts</li>
              <li>Displaced Populations</li>
            </ol>
            According to ICRC these Complex Emergencies are typically
            characterized by a combination of factors that present specific
            risks to the affected population, including:
            <ol>
              <li>Extensive Violence</li>
              <li>Displacements of Populations</li>
              <li>Loss of Life</li>
              <li>Widespread Damage to both Societies and Economies</li>
              <li>
                Need for Large-scale, Humanitarian Assistance across Multiple
                Agencies
              </li>
              <li>
                Political and Military Constraints which impact or prevent
                Humanitarian Assistance
              </li>
              <li>Increased Security Risks for Humanitarian Relief Workers</li>
            </ol>
          </p>
          <h2>Disaster Prevention</h2>
          <hr />
          <p>
            UNISDR views Disaster Prevention as the concept of engaging in
            activities which intend to prevent or avoid potential adverse
            impacts through action taken in advance, activities designed to
            provide protection from the occurrence of disasters. WCPT similarly
            highlight that while not all disasters can be prevented, good risk
            management, evacuation plans, environmental planning and design
            standards can reduce risk of loss of life and injury mitigation. The
            HYOGO Framework was one such Global Plan for natural Disaster Risk
            Reduction, which was adopted in 2005 as a 10 year Global Plan,
            signed by agreement with 168 Governments which offered guiding
            principles, priorities for action and practical means for achieving
            disaster resilience for vulnerable communities.
          </p>
          <h2>Disaster Preparedness</h2>
          <hr />
          <p>
            According to ICRC, Disaster Preparedness refers to measures taken to
            prepare for and reduce the effects of disasters, be they natural or
            man-made. This is achieved through research and planning in order to
            try to predict areas or regions that may be at risk of disaster and
            where possible prevent these from occurring and/or reduce the impact
            those disasters on the vulnerable populations that may be affected
            so they can effectively cope. Disaster preparedness activities
            embedded with risk reduction measures can prevent disaster
            situations and also result in saving maximum lives and livelihoods
            during any disaster situation, enabling the affected population to
            get back to normalcy within a short time period. Minimisation of
            loss of life and damage to property through facilitation of
            effective disaster response and rehabilitation services when
            required. Preparedness is the main way of reducing the impact of
            disasters. Community-based preparedness and management should be a
            high priority in physical therapy practice management.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
