import React from "react";
import "../../styles/Pages.css";
import Paragraph from "../Paragraph";
import image from "../images/card-image.svg";
import rectangle1 from "../images/Rectangle1.png";
import rectangle2 from "../images/Rectangle2.png";

const Page1 = () => {
  return (
    <>
      <div className="centralize mt-100">
        <div className="card " id="card">
          <div className="card-body" id="card">
            <div className="card-heading">
              Outs<span className="underline">our</span>cing{" "}
            </div>
            <div className="centralize-col mx-auto">
              <div>
                <p className="card-text">
                  IT Outsourcing: Expectations Vs. Reality — Lessons from
                  Google, WhatsApp, Slack and Co.
                </p>
              </div>

              <div >
                <p className="card-end">
                  <span>
                    <img src={image} alt=""></img>
                  </span>
                  Mary Atamaniuk - 11 min read - 5 February 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="centralize-col mt-100">
        <div className="title">
          <p>5 Biggest IT Outsourcing Risks: How to Stay Away</p>
        </div>
        <div className="content container">
          <p>
            IT outsourcing is a huge market. Growing at a rate of over 4%, IT
            outsourcing is currently worth over $80 billion globally and
            companies of all sizes often outsource IT work to partners,
            suppliers, and vendors.
          </p>
          <p>
            As a trend, outsourcing is a popular and often-used approach all
            over the world. Whether you are the CEO of a global Fortune 500
            company or co-founder of a startup, leveraging the benefits of
            cost-effective experts that are external to your organization comes
            with numerous advantages.
          </p>
          <p>
            Unlike internal staff, your company takes advantage of the benefits
            of IT outsourcing, as it doesn’t carry the risk and cost of payroll,
            admin, office costs, insurance, pensions, and other associated
            expenses. All of that is carried by the company you are working
            with. This way, your internal risks are reduced.
          </p>
          <p>
            In addition to this, outsourcing can be scaled up or down according
            to the need. IT outsourcing makes companies more efficient without
            increasing capital or payroll costs, helping organizations to hit
            deadlines, and leverage growth opportunities.
          </p>
          <p>
            Some of the world’s largest companies regularly use IT outsourcing
            across numerous divisions. And even in the technology sector, dozens
            of multi-million and billion-dollar firms were built — and still
            rely on — remote and outsourced developers.
          </p>
        </div>
      </section>

      <section className="centralize-col mt-100">
        <div className="title">
          <p>Companies that rely on IT outsourcing</p>
        </div>
        <div className="content container">
          <p>
            The companies listed below, alongside dozens of others such as
            Alibaba, Spotify, Slack, and Skype — now owned by Microsoft —
            regularly work with remote and outsourced developers, with many of
            them dependent on the skills of remote engineers in the early days.
          </p>
        </div>
      </section>
      <Paragraph
        image="1"
        title="AppSumo (remote developers)"
        capital="A"
        paragraph1="name that is no stranger to
      many in the marketing community, AppSumo launched in 2010 and is
      now worth over $2 million with an impressive mailing list of over
      700,000."
        nextline="Founded by serial entrepreneur Noah Kagan, it is a daily deal site"
        paragraph2="for entrepreneurs, marketing professionals and some might say,
        professional hustlers. To begin with, Noah paid a remote developer
        to integrate PayPal into a landing page, costing him $50. Even
        today, AppSumo runs lean and still relies on remote and outsourced
        developers for a wide range of tech needs and projects."
      />

      <Paragraph
        image="2"
        title="Google (outsourced developers)"
        capital="A"
        paragraph1="name that is no stranger to
      many in the marketing community, AppSumo launched in 2010 and is
      now worth over $2 million with an impressive mailing list of over
      700,000."
        nextline="Founded by serial entrepreneur Noah Kagan, it is a daily deal site"
        paragraph2="of other job roles, including virtual assistants and customer service agents.
        One area that might surprise people that they outsource is phone and email support for Google Ads (formerly AdWords; Google’s main revenue generator)."
      />
      <Paragraph
        image="3"
        title=" Slack (remote developers)"
        capital="I"
        paragraph1="t is a tool that millions of remote developers use around the world. It is always one we’ve used and would it surprise you to learn that in 2013, work on the product and design was outsourced to a remote firm? In 2013, the founding team — Stewart Butterfield, Eric Costello, Cal Henderson, and Serguei Mourachov — came up with the idea, created an MVP and beta tested it, before outsourcing the development work to a remote team."
      />
      <Paragraph
        image="4"
        title="WhatsApp (outsourced developers)"
        capital="Y"
        paragraph1="et another startup success story. Founded in 2009, it grew at a rapid rate and then was bought by Facebook  in 2013 for $19.3 billion. Development of the original app was outsourced to Russia, to a contractor iPhone developer named Igor Solomennikov, who eventually joined to the team as CIO."
      />
      <Paragraph
        image="5"
        title="Basecamp (remote developers)"
        capital="L"
        paragraph1="aunched back in 2004, it embodies the ‘grow slowly and carefully’ mindset that not every tech company manages to achieve. At the time, Basecamp, then known as 37signals, was a web-project development tool, but not the main revenue source for the team. They were mainly doing consulting projects and this product emerged to help them with those projects."
      />
      <section className="container content mt-100">
        <p>As CEO, Jason Fried explains:</p>
        <div className="centralize bold-content">
          “As demand for our services grew, we found ourselves increasingly
          disorganized. We didn’t like the rag-tag image we were portraying to
          our clients.
        </div>
        <div className="centralize bold-content">
          They were paying us good money — and our work was good — but the way
          we organized the work, communicated about the work, and presented the
          work wasn’t becoming.
        </div>
        <div className=" bold-content">It was time to [get organized].”</div>
        <p className="mt-50">
          So that is what they did, outsourcing the development work on the
          product to increase the cost-opportunity gain. In time, Basecamp
          generated more than consulting work and they now manage a remote team
          of 50 people in 32 countries. However, not every IT outsourcing
          project is as successful as the Basecamp or WhatsApp experience.
          Companies need to understand the expectations and realities and put
          structures and strategies in place to mitigate the risks of
          outsourcing development. Although the world’s leading companies
          benefit from the use of outsourcing, this model is not perfect. In
          this article, we’ll tell you about the most common
          ‘expectation-vs.-reality’ situations that disrupt the outsourcing in
          general.
        </p>
      </section>
      <section className="container mt-50">
        <div className="bold-title">
          IT Outsourcing: Expectations vs. reality situations
        </div>
        <div className="sub-heading mt-25">
          IT Outsourcing mistake #1: Poor communication between parties
        </div>
        <div className="content mt-25">
          <span className="bold">Expectation:</span> Companies want clear and
          consistent communications between two remote teams working on one
          project. Whether it is one person — the client — and one freelancer,
          or a whole team in two companies, there needs to be a near-constant
          flow of dialogue between both to ensure expectations are met, the
          information is clear and project outcomes are achieved.
        </div>
        <div className="content mt-25">
          <span className="bold">Reality:</span> There is always a risk that
          communication won’t be clear. One party can let the other down.
          Information isn’t always transmitted in a timely fashion, or it isn’t
          clear, or more detail is needed but the other party isn’t forthcoming
          with that information.
        </div>
        <div className="centralize mt-50">
          <img src={rectangle1} alt=""></img>
        </div>

        <div className="content mt-25">
          Managers in both teams could fail to shepherd the project along,
          causing missed deadlines, project timescales to drag, a lack of
          clarity, and an increase in the amount of confusion between parties.
          In situations such as this, a creeping feeling of distrust can cause
          serious problems and potentially derail an outsourced IT project.
          Other problems, such as language barriers, working in different time
          zones, and even small cultural differences, can cause real and
          unforeseen gaps in understanding between both parties.
        </div>
        <div className="content  mt-25">
          <p className="bold">Solutions:</p>
          <ul>
            <li>
              Before a project starts, make sure both parties are clear on the
              roadmap, milestones, expectations, deadline and where/when input
              is needed and at what points there are complicated factors that
              can make miscommunications more likely.
            </li>
            <li>
              Acknowledging all of this beforehand and sticking to delivery
              schedules (of development work as well as information from the
              client’s side) is one of the most effective solutions for
              mitigating this risk.
            </li>
            <li>
              It is always better in the early days of every project to
              over-communicate, then dial it back as both teams get familiar
              with one another, thereby increasing the amount of shared trust
              and experience working together.
            </li>
          </ul>
        </div>
        <div className="sub-heading mt-25">
          IT Outsourcing mistake #2: Ignoring company culture
        </div>
        <div className="content mt-25">
          <span className="bold">Expectation:</span> In an ideal world, any
          outsourced teams should take clear guidance from the company culture
          of any client they’re working with. It also helps relations between a
          client and supplier that this works both ways. Culture is as important
          as the source code in a development project, and therefore it needs to
          be protected.
        </div>
        <div className="content mt-25">
          <span className="bold">Reality:</span> In reality, culture may not be
          front-of-mind for developers working on a project, unless a clear
          makes this aspect of the project clear. Not taking team culture into
          consideration can cause a breakdown in communications and expectations
          not being met. It could also cause working practices that one company
          considers normal not to be delivered upon, such as keeping clear and
          accurate documentation of an IT project.
        </div>
        <div className="content  mt-25">
          <p className="bold">Solutions:</p>
          <ul>
            <li>
              Make it clear what you’re — as the client — culture is, what your
              values are and why these are important to note as part of an IT
              outsourced project.
            </li>
            <li>
              Outline what this means in practical terms and what impact this
              should have on how work is delivered, how the project is
              documented, and how an offshore team should communicate with
              internal team members and managers.
            </li>
            <li>
              If an outsourced IT project impacts external partners, suppliers,
              and stakeholders, including customers, then special consideration
              needs to be made of the culture to make sure the design, user
              experience, and appearance of any finished project meets with
              brand guidelines and cultural values.
            </li>
          </ul>
        </div>

        <div className="sub-heading mt-25">
          IT Outsourcing mistake #3: Insufficient business analysis
        </div>
        <div className="content mt-25">
          <span className="bold">Expectation:</span>Without the involvement of a
          business analyst, which ideally should happen before a project starts,
          there is a risk that the needs of the business and functionality of
          any IT project will be misaligned. Even with the involvement of a
          business analyst, they are tasked with much more than gathering
          requirements. Ideally, a business analyst (BA) should be tasked with
          supporting the project from start to finish and communicating the
          needs of the client clearly, then ensuring an IT assessment is clearly
          communicated back to the client.
        </div>
        <div className="content mt-25">
          <span className="bold">Reality:</span> In reality, a business analyst
          can be sidelined or what they’ve understood about a project either
          isn’t understood or taken onboard, causing mission creep and
          unexpected misunderstandings and a misalignment. This can cause cost
          overruns and delays.
        </div>
        <div className="content  mt-25">
          <p className="bold">Solutions:</p>
          <ul>
            <li>
              Work with a BA from the beginning to scope the entire project and
              establish then maintain communication between all stakeholders;
            </li>
            <li>
              Business analysts need to translate the needs of a client into a
              language and tasks developers understand and translate back
              messages that require the client to make changes;
            </li>
            <li>
              Business analysts should also be involved in the testing stage of
              a project to ensure the end result meets expectations.
            </li>
          </ul>
        </div>

        <div className="sub-heading mt-25">
          IT Outsourcing mistake #4: Poor technical documentation
        </div>
        <div className="content mt-25">
          <span className="bold">Expectation:</span>Technical documentation is a
          roadmap for the project. It’s also vital to ensure the client has
          complete ownership of the project IP and can hand it over to an
          internal team to manage, or another vendor if they wanted to do so.
        </div>
        <div className="content mt-25">
          <span className="bold">Reality:</span>In reality, when projects are
          rushed or not managed well, or there is poor communication between the
          client and outsourced IT partner, documentation isn’t always top of
          the agenda. The risk is this could be poorly maintained, thereby
          failing to document the project successfully and leaving the client
          and anyone else who might work on the code with knowledge and logic
          gaps.
        </div>
        <div className="content  mt-25">
          <p className="bold">Solutions:</p>
          <ul>
            <li>
              The client needs to keep track of the development of this document
              as a key part of the outsourced project.
            </li>
            <li>
              A technical writer and the business analyst, and key players in
              the client company should be involved in its production.
            </li>
            <li>
              If in doubt, this documentation should include as much information
              as possible to reduce the risks from IT outsourced projects down
              the road.
            </li>
          </ul>
        </div>

        <div className="sub-heading mt-25">
          IT Outsourcing mistake #5: Loss of control/lack of trust
        </div>
        <div className="content mt-25">
          <span className="bold">Expectation:</span>A client should always be
          able to manage and trust offshore development teams in almost the same
          way they would with internal projects.
        </div>
        <div className="content mt-25">
          <span className="bold">Reality:</span>IWithout clear communications,
          there is always the risk that true will breakdown or decrease during
          the project and a lack of control or transparency will always make
          this worse. gaps.
        </div>
        <div className="content  mt-25">
          <p className="bold">Solutions:</p>
          <ul>
            <li>Maintain a clear and consistent dialogue at all times.</li>
            <li>
              Make sure key stakeholders are informed and a business analyst is
              involved;
            </li>
            <li>Keep the documentation up to date.</li>
          </ul>
        </div>

        <div className="sub-heading mt-25">
          Key takeaways: how to mitigate the risks
        </div>
        <div className="content mt-25">
          Outsourcing IT projects is something that every company from Fortune
          500 giants to tech start-ups do; it is a normal and vital part of IT
          project management. It is an effective way to manage and reduce costs
          while minimizing risk and internal complexities.
        </div>
        <div className="centralize mt-50">
          <img src={rectangle2} alt=""></img>
        </div>
        <div className="content mt-25">
          But managers within client companies need to be clearly aware of the
          risks before commencing with an outsourced project. As we’ve noted in
          this article, the risks include:
        </div>
        <div className="content mt-25">
          <ul>
            <li>Poor communication</li>
            <li>Not paying enough attention to company culture</li>
            <li>Insufficient business analysis</li>
            <li>Poor technical documentation</li>
            <li>The fear that a company will lose control</li>
          </ul>
        </div>
        <div className="content mt-25">
          Some of the most effective ways to reduce these risks, or mitigate
          them as much as possible involve clear communications, and setting
          expectations in the very early stages of the project. Working with
          business analysts and project managers, and from the client’s side,
          avoid having too many chiefs and managers involved.
        </div>
        <div className="content mt-25">
          Don’t make an IT project more complicated than it needs to be. Make
          sure those responsible from the client’s side have sufficient leverage
          and C-suite support to make decisions, thereby supporting and
          increasing the chances of a more successful outcome.
        </div>
        <div className="content mt-25">
          Want to succeed in IT outsourcing hiring remotely? We can source a
          list of dedicated teams of highly qualified developers in 48 hours or
          less. YouTeam is a Y Combinator-backed marketplace that works with
          200+ pre-vetted outsourcing agencies from Eastern Europe and Latin
          America and leverages a dynamic pool of 20,000+ experienced software
          developers. We know who’s going to be available next week, and we know
          whom to recommend you right after you leave your requirements. Let us
          help you hire an offshore development team in only a week.
        </div>
      </section>
    </>
  );
};

export default Page1;
