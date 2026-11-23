import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"

const Header = HeaderConstructor()

/**
 * The default page frame — three-column layout with left sidebar, center
 * content (header + body + afterBody), and right sidebar, followed by a footer.
 *
 * This is the original Quartz layout, extracted from renderPage.tsx.
 */
export const DefaultFrame: PageFrame = {
  name: "default",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer,
  }: PageFrameProps) {
    return (
      <>
        <div class="left sidebar">
          {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <div class="center">
          <div class="page-header">
            <Header {...componentData}>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>
            <div class="popover-hint">
              {beforeBody.map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
          </div>
          <Content {...componentData} />
          <br />
          <div style={{display: 'flex', alignItems: 'center'}}>
             <svg width="157" height="36.5" viewBox="0 0 314 73" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'var(--gray)', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
            <circle cx="140.5" cy="33.5" r="32.5" stroke-width="3"/>
            <circle cx="185" cy="41" r="21" stroke-width="3"/>
            <path d="M177 58C177 64.6647 171.815 70 165.5 70C159.185 70 154 64.6647 154 58C154 51.3353 159.185 46 165.5 46C171.815 46 177 51.3353 177 58Z" stroke-width="3"/>
            <circle cx="103" cy="24" r="21" stroke-width="3"/>
            <circle cx="103" cy="51" r="21" stroke-width="3"/>
            <circle cx="210" cy="30" r="15" stroke-width="3"/>
            <path d="M93 39C93 46.2143 87.3696 52 80.5 52C73.6304 52 68 46.2143 68 39C68 31.7857 73.6304 26 80.5 26C87.3696 26 93 31.7857 93 39Z" stroke-width="3"/>
            <circle cx="258" cy="48" r="14" stroke-width="3"/>
            <path d="M56 63.5C56 68.1467 52.0195 72 47 72C41.9805 72 38 68.1467 38 63.5C38 58.8533 41.9805 55 47 55C52.0195 55 56 58.8533 56 63.5Z" stroke-width="3"/>
            <circle cx="7.5" cy="36.5" r="6.5" stroke-width="3"/>
            <circle cx="308" cy="57" r="5" stroke-width="3"/>
          </svg>
          </div>
          <br />
          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>
        <div class="right sidebar">
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        {footer.map((FooterComponent) => (
          <FooterComponent {...componentData} />
        ))}
      </>
    )
  },
}
