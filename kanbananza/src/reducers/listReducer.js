import { lists as defaultLists } from '../normalized-state';

export default (lists = defaultLists, action) => {
  switch (action.state) {
    default:
      return lists;
  }
};
