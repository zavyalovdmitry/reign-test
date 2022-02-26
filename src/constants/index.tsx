export const PAGES = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const MAX_PAGES = 49; // info from the response from api

export const NO_LIKES_MESSAGE = 'No likes on this page :(';

export const SELECT_OPTIONS = [
  {
    value: 'Angular',
    label: (
      <div className="filter-item">
        <img src="/images/image-1.png" alt="alt" />
        Angular
      </div>
    ),
  },
  {
    value: 'Reactjs',
    label: (
      <div className="filter-item">
        <img src="/images/image-2.png" alt="alt" />
        Reactjs
      </div>
    ),
  },
  {
    value: 'Vuejs',
    label: (
      <div className="filter-item">
        <img src="/images/image-3.png" alt="alt" />
        Vuejs
      </div>
    ),
  },
];

export const SELECT_STYLES = {
  container: (provided: any, state: any) => ({
    ...provided,
    width: '240px',
    height: '32px',
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    height: '32px',
    border: 'solid 1px #2e2e2e',
  }),
  indicatorsContainer: (provided: any, state: any) => ({
    ...provided,
    height: '32px',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    fontFamily: 'Roboto-Regular',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.57',
    letterSpacing: 'normal',
    color: '#343434',
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    fontFamily: 'Roboto-Regular',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.57',
    letterSpacing: 'normal',
    color: '#343434',
  }),
};
