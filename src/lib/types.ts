export enum Section {
    Main = "MAIN",
    Gallery = "GALLERY",
    Contact = "CONTACT",
  }
export interface PageState {
    section: Section,
    id?: string,
}
export interface PageProps {
    pageMethod: Function,
    pageState: PageState
}