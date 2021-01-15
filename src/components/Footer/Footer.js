import React from "react";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Can't find your favourite plugin in the repository? Are you a plugin
          developer and want yours added?
        </FooterSubHeading>
        <FooterSubText>
          Enter the plugins github url below, after review it will be added.
        </FooterSubText>
        <Form>
          <FormInput
            name="plugin-name"
            type="url"
            placeholder="github url..."
          />
          <Button fontbig>Add my plugin please</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Other PM's</FooterLinkTitle>
            <FooterLink to="/">Volt</FooterLink>
            <FooterLink to="/">Vim-Plug</FooterLink>
            <FooterLink to="/">Vundle</FooterLink>
            <FooterLink to="/">Pathogen</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact</FooterLinkTitle>
            <FooterLink to="/">Github</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
            <FooterLink to="/">Mastodon</FooterLink>
            <FooterLink to="/">Patreon</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Media</FooterLinkTitle>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Medium</FooterLink>
            <FooterLink to="/">HackerNoon</FooterLink>
            <FooterLink to="/">Null Byte</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Resources</FooterLinkTitle>
            <FooterLink to="/">Installation</FooterLink>
            <FooterLink to="/">Documentation</FooterLink>
            <FooterLink to="/">CLI Source</FooterLink>
            <FooterLink to="/">API Source</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
