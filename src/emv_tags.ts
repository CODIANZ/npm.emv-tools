import { Singleton } from "@codianz/singleton";

type emv_tag_info_t = {
  readonly tag: string;
  readonly template: readonly string[];
  readonly name: string;
  readonly length?: number;
};

/** generate with `tools/convert_tags.ts` */
const emv_tag_infos: readonly emv_tag_info_t[] = [{"tag":"42","template":["73","BF0C"],"name":"Issuer Identification Number (IIN)"},{"tag":"4F","template":["61"],"name":"Application Dedicated File (ADF) Name"},{"tag":"50","template":["A5","61"],"name":"Application Label"},{"tag":"57","template":["77","70"],"name":"Track 2 Equivalent Data"},{"tag":"5A","template":["77","70"],"name":"Application Primary Account Number (PAN)"},{"tag":"5F20","template":["77","70"],"name":"Cardholder Name"},{"tag":"5F24","template":["77","70"],"name":"Application Expiration Date"},{"tag":"5F25","template":["77","70"],"name":"Application Effective Date"},{"tag":"5F28","template":["77","70"],"name":"Issuer Country Code"},{"tag":"5F2A","template":[],"name":"Transaction Currency Code"},{"tag":"5F2D","template":["A5"],"name":"Language Preference"},{"tag":"5F30","template":["77","70"],"name":"Service Code"},{"tag":"5F34","template":["77","70"],"name":"Application Primary Account Number (PAN) Sequence Number"},{"tag":"5F36","template":[],"name":"Transaction Currency Exponent"},{"tag":"5F50","template":["73","BF0C"],"name":"Issuer URL"},{"tag":"5F53","template":["73","BF0C"],"name":"International Bank Account Number (IBAN)"},{"tag":"5F54","template":["73","BF0C"],"name":"Bank Identifier Code (BIC)"},{"tag":"5F55","template":["73","BF0C"],"name":"Issuer Country Code (alpha2 format)"},{"tag":"5F56","template":["73","BF0C"],"name":"Issuer Country Code (alpha3 format)"},{"tag":"5F57","template":[],"name":"Account Type"},{"tag":"61","template":["77","70"],"name":"Application Template"},{"tag":"6F","template":[],"name":"File Control Information (FCI) Template"},{"tag":"70","template":[],"name":"READ RECORD Response Message Template"},{"tag":"71","template":[],"name":"Issuer Script Template 1"},{"tag":"72","template":[],"name":"Issuer Script Template 2"},{"tag":"73","template":["61"],"name":"Directory Discretionary Template"},{"tag":"77","template":[],"name":"Response Message Template Format 2"},{"tag":"7F60","template":["BF4B","BF4A"],"name":"Biometric Information Template (BIT), card"},{"tag":"7F60","template":[],"name":"Biometric Information Template (BIT), terminal –"},{"tag":"80","template":[],"name":"Response Message Template Format 1"},{"tag":"81","template":[],"name":"Amount, Authorised (Binary)"},{"tag":"81","template":["BF4E","A1"],"name":"Biometric Type"},{"tag":"82","template":["80","77"],"name":"Application Interchange Profile"},{"tag":"82","template":["A1"],"name":"Biometric Subtype"},{"tag":"83","template":[],"name":"Command Template"},{"tag":"84","template":["6F"],"name":"Dedicated File (DF) Name"},{"tag":"86","template":["72","71"],"name":"Issuer Script Command"},{"tag":"87","template":["A5","61"],"name":"Application Priority Indicator"},{"tag":"88","template":["A5"],"name":"Short File Identifier (SFI)"},{"tag":"89","template":[],"name":"Authorisation Code"},{"tag":"8A","template":[],"name":"Authorisation Response Code"},{"tag":"8C","template":["77","70"],"name":"Card Risk Management Data Object List 1 (CDOL1)"},{"tag":"8D","template":["77","70"],"name":"Card Risk Management Data Object List 2 (CDOL2)"},{"tag":"8E","template":["77","70"],"name":"Cardholder Verification Method (CVM) List"},{"tag":"8F","template":["77","70"],"name":"Certification Authority Public Key Index"},{"tag":"90","template":["77","70"],"name":"Issuer Public Key Certificate"},{"tag":"90","template":["BF4E","A1"],"name":"Biometric Solution ID"},{"tag":"91","template":[],"name":"Issuer Authentication Data"},{"tag":"92","template":["77","70"],"name":"Issuer Public Key Remainder"},{"tag":"93","template":["77","70"],"name":"Signed Static Application Data"},{"tag":"94","template":["80","77"],"name":"Application File Locator (AFL)"},{"tag":"95","template":[],"name":"Terminal Verification Results"},{"tag":"97","template":["77","70"],"name":"Transaction Certificate Data Object List (TDOL)"},{"tag":"98","template":[],"name":"Transaction Certificate (TC) Hash Value"},{"tag":"99","template":[],"name":"Transaction Personal Identification Number (PIN) Data"},{"tag":"9A","template":[],"name":"Transaction Date"},{"tag":"9B","template":[],"name":"Transaction Status Information"},{"tag":"9C","template":[],"name":"Transaction Type"},{"tag":"9D","template":["61"],"name":"Directory Definition File (DDF) Name"},{"tag":"9F01","template":[],"name":"Acquirer Identifier"},{"tag":"9F02","template":[],"name":"Amount, Authorised (Numeric)"},{"tag":"9F03","template":[],"name":"Amount, Other (Numeric)"},{"tag":"9F04","template":[],"name":"Amount, Other (Binary)"},{"tag":"9F05","template":["77","70"],"name":"Application Discretionary Data"},{"tag":"9F06","template":[],"name":"Application Identifier (AID) – terminal"},{"tag":"9F07","template":["77","70"],"name":"Application Usage Control"},{"tag":"9F08","template":["77","70"],"name":"Application Version Number"},{"tag":"9F09","template":[],"name":"Application Version Number"},{"tag":"9F0A","template":["73"],"name":"Application Selection Registered Proprietary Data (ASRPD)"},{"tag":"9F0B","template":["77","70"],"name":"Cardholder Name Extended"},{"tag":"9F0C","template":["73","BF0C"],"name":"Issuer Identification Number Extended (IINE)"},{"tag":"9F0D","template":["77","70"],"name":"Issuer Action Code – Default"},{"tag":"9F0E","template":["77","70"],"name":"Issuer Action Code – Denial"},{"tag":"9F0F","template":["77","70"],"name":"Issuer Action Code – Online"},{"tag":"9F10","template":["80","77"],"name":"Issuer Application Data"},{"tag":"9F11","template":["A5"],"name":"Issuer Code Table Index"},{"tag":"9F12","template":["A5","61"],"name":"Application Preferred Name"},{"tag":"9F13","template":[],"name":"Last Online Application Transaction Counter (ATC) Register"},{"tag":"9F14","template":["77","70"],"name":"Lower Consecutive Offline Limit"},{"tag":"9F15","template":[],"name":"Merchant Category Code"},{"tag":"9F16","template":[],"name":"Merchant Identifier"},{"tag":"9F17","template":[],"name":"Personal Identification Number (PIN) Try Counter"},{"tag":"9F18","template":["72","71"],"name":"Issuer Script Identifier"},{"tag":"9F19","template":["77","70"],"name":"Token Requestor ID"},{"tag":"9F1A","template":[],"name":"Terminal Country Code"},{"tag":"9F1B","template":[],"name":"Terminal Floor Limit"},{"tag":"9F1C","template":[],"name":"Terminal Identification"},{"tag":"9F1D","template":[],"name":"Terminal Risk Management Data"},{"tag":"9F1E","template":[],"name":"Interface Device (IFD) Serial Number"},{"tag":"9F1F","template":["77","70"],"name":"Track 1 Discretionary Data"},{"tag":"9F20","template":["77","70"],"name":"Track 2 Discretionary Data"},{"tag":"9F21","template":[],"name":"Transaction Time"},{"tag":"9F22","template":[],"name":"Certification Authority Public Key Index"},{"tag":"9F23","template":["77","70"],"name":"Upper Consecutive Offline Limit"},{"tag":"9F24","template":["77","70"],"name":"Payment Account Reference (PAR)"},{"tag":"9F25","template":["77","70"],"name":"Last 4 Digits of PAN"},{"tag":"9F26","template":["80","77"],"name":"Application Cryptogram"},{"tag":"9F27","template":["80","77"],"name":"Cryptogram Information Data"},{"tag":"9F2D","template":["77","70"],"name":"Integrated Circuit Card (ICC) Public Key Certificate for ODE (ECC)"},{"tag":"9F2E","template":["77","70"],"name":"ICC PIN Encipherment Public Key Exponent"},{"tag":"9F2F","template":["77","70"],"name":"ICC PIN Encipherment Public Key Remainder"},{"tag":"9F30","template":[],"name":"Biometric Terminal Capabilities –"},{"tag":"9F31","template":["70"],"name":"Card BIT Group Template"},{"tag":"9F32","template":["77","70"],"name":"Issuer Public Key Exponent"},{"tag":"9F33","template":[],"name":"Terminal Capabilities"},{"tag":"9F34","template":[],"name":"Cardholder Verification Method (CVM) Results"},{"tag":"9F35","template":[],"name":"Terminal Type"},{"tag":"9F36","template":["80","77"],"name":"Application Transaction Counter (ATC)"},{"tag":"9F37","template":[],"name":"Unpredictable Number"},{"tag":"9F38","template":["A5"],"name":"Processing Options Data Object List (PDOL)"},{"tag":"9F39","template":[],"name":"Point-of-Service (POS) Entry Mode"},{"tag":"9F3A","template":[],"name":"Amount, Reference Currency"},{"tag":"9F3B","template":["77","70"],"name":"Application Reference Currency"},{"tag":"9F3C","template":[],"name":"Transaction Reference Currency Code"},{"tag":"9F3D","template":[],"name":"Transaction Reference Currency Exponent"},{"tag":"9F40","template":[],"name":"Additional Terminal Capabilities"},{"tag":"9F41","template":[],"name":"Transaction Sequence Counter"},{"tag":"9F42","template":["77","70"],"name":"Application Currency Code"},{"tag":"9F43","template":["77","70"],"name":"Application Reference Currency Exponent"},{"tag":"9F44","template":["77","70"],"name":"Application Currency Exponent"},{"tag":"9F45","template":[],"name":"Data Authentication Code"},{"tag":"9F46","template":["77","70"],"name":"ICC Public Key Certificate"},{"tag":"9F47","template":["77","70"],"name":"ICC Public Key Exponent"},{"tag":"9F48","template":["77","70"],"name":"ICC Public Key Remainder"},{"tag":"9F49","template":["77","70"],"name":"Dynamic Data Authentication Data Object List (DDOL)"},{"tag":"9F4A","template":["77","70"],"name":"Static Data Authentication Tag List"},{"tag":"9F4B","template":["80","77"],"name":"Signed Dynamic Application Data"},{"tag":"9F4C","template":[],"name":"ICC Dynamic Number"},{"tag":"9F4D","template":["73","BF0C"],"name":"Log Entry"},{"tag":"9F4E","template":[],"name":"Merchant Name and Location"},{"tag":"9F4F","template":[],"name":"Log Format"},{"tag":"A1","template":["7F60"],"name":"Biometric Header Template (BHT)"},{"tag":"A5","template":["6F"],"name":"File Control Information (FCI) Proprietary Template"},{"tag":"BF0C","template":["A5"],"name":"File Control Information (FCI) Issuer Discretionary Data"},{"tag":"BF4A","template":["9F31"],"name":"Offline BIT Group Template"},{"tag":"BF4B","template":["9F31"],"name":"Online BIT Group Template"},{"tag":"BF4C","template":[],"name":"Biometric Try Counters Template –"},{"tag":"BF4D","template":[],"name":"Preferred Attempts Template –"},{"tag":"BF4E","template":[],"name":"Biometric Verification Data Template –"},{"tag":"DF50","template":["BF4C"],"name":"Facial Try Counter"},{"tag":"DF50","template":["BF4D"],"name":"Preferred Facial Attempts"},{"tag":"DF50","template":["BF4E"],"name":"Enciphered Biometric Key Seed"},{"tag":"DF51","template":["BF4C"],"name":"Finger Try Counter"},{"tag":"DF51","template":["BF4D"],"name":"Preferred Finger Attempts"},{"tag":"DF51","template":["BF4E"],"name":"Enciphered Biometric Data"},{"tag":"DF52","template":["BF4C"],"name":"Iris Try Counter"},{"tag":"DF52","template":["BF4D"],"name":"Preferred Iris Attempts"},{"tag":"DF52","template":["BF4E"],"name":"MAC of Enciphered Biometric Data"},{"tag":"DF53","template":["BF4C"],"name":"Palm Try Counter"},{"tag":"DF53","template":["BF4D"],"name":"Preferred Palm Attempts"},{"tag":"DF54","template":["BF4C"],"name":"Voice Try Counter"},{"tag":"DF54","template":["BF4D"],"name":"Preferred Voice Attempts"}] as const;

/** ISO 7816-4, 5.1.5 */
const fci_template: readonly emv_tag_info_t[] = [
  { tag: "80", name: "Number of data bytes in the file, excluding structural information. Transparent EFs", template: ["6F"] },
  { tag: "81", name: "Number of data bytes in the file, including structural information if any", template: ["6F"] },
  { tag: "82", name: "File descriptor byte", template: ["6F"], length: 1 },
  { tag: "82", name: "File descriptor byte followed by data coding byte", template: ["6F"], length: 2 },
  { tag: "82", name: "File descriptor byte followed by data coding byte and maximum record length.", template: ["6F"], length: 3 },
  { tag: "82", name: "File descriptor byte followed by data coding byte and maximum record length.", template: ["6F"], length: 4 },
  { tag: "83", name: "File identifier", template: ["6F"] },
  { tag: "84", name: "DF name", template: ["6F"]},
  { tag: "85", name: "Proprietary information", template: ["6F"] },
  { tag: "86", name: "Security attributes (coding outside the scope of this part of ISO/IEC 7816)", template: ["6F"] },
  { tag: "87", name: "Identifier of an EF containing an extension of the FCI", template: ["6F"] },
] as const;

class EmvTags_ {
  private byTag_: { [tag: string]: emv_tag_info_t[] } = {};
  private byTemplate_: { [template: string]: emv_tag_info_t[] } = {};

  public constructor() {
    this.restoreDefault();
  }

  public restoreDefault(): void {
    this.byTag_ = {};
    this.byTemplate_ = {};
    this.addPrivateTags(emv_tag_infos);
    this.addPrivateTags(fci_template);
  }

  public addPrivateTags(tag_infos: readonly emv_tag_info_t[]): void {
    tag_infos.forEach(tag_info => {
      if (!this.byTag_[tag_info.tag]) {
        this.byTag_[tag_info.tag] = [];
      }
      this.byTag_[tag_info.tag].push(tag_info);
      tag_info.template.forEach(t => {
        if (!this.byTemplate_[t]) {
          this.byTemplate_[t] = [];
        }
        this.byTemplate_[t].push(tag_info);
      });
    });
  }

  public findByTag(tag: string): emv_tag_info_t[] {
    return this.byTag_[tag] ?? [];
  }

  public findFirstByTag(tag: string): emv_tag_info_t | undefined {
    return this.findByTag(tag)[0];
  }

  public findTemplateChildren(templateTag: string): emv_tag_info_t[] {
    return this.byTemplate_[templateTag] ?? [];
  }
}

export const EmvTags = new Singleton(() => new EmvTags_());
