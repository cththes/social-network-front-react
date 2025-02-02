const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: 1,
      fullName: "Nick Land",
      status: "Tomorrow can take care of itself",
      photoUrl: "https://miro.medium.com/v2/resize:fit:975/1*ZHN3mUag21mNBIWcep1_1A.png",
      location: { country: "United Kingdom", city: "" },
      followed: true,
    },
    {
      id: 2,
      fullName: "William S. Burroughs",
      status: "Sodomy is as old as the human species",
      photoUrl:
        "https://sun9-39.userapi.com/impg/aa8FV1Bl6x7Uk9S4cZzvLcRDq0Cne7ibHfAuWg/g01BmlmJwdk.jpg?size=676x676&quality=96&sign=c20773a545931e6e30d40811396b915a&type=album",
      location: { country: "U.S", city: "Lawrence" },
      followed: false,
    },
    {
      id: 3,
      fullName: "Friedrich W. Nietzsche",
      status:
        "Единственная причина, почему я не кончил как Эллиот Роджер заключается в том, что у меня не было BMW",
      photoUrl:
        "https://biography-live.ru/wp-content/uploads/2019/05/friedrich-nietzsche-9423452-1-402.jpg",
      location: { country: "German Empire", city: "Weimar" },
      followed: false,
    },
    {
      id: 4,
      fullName: "Tomonobu Itagaki",
      status:
        'At first it was easier, but when the testers said "this is too difficult", I made it even more difficult',
      photoUrl:
        "https://sun9-29.userapi.com/impg/ifMOZGJmA-OGOTUEl19naKnUPB-LCF02AX1oTA/nMVeSRznZaE.jpg?size=179x179&quality=96&sign=f66bd9cb5681d8f7bbd86d00d68baeb7&type=album",
      location: { country: "Japan", city: "Tokyo" },
      followed: true,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: true } : user
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: false } : user
        ),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export const createFollowAction = (userId) => ({ type: FOLLOW, userId });
export const createUnfollowAction = (userId) => ({ type: UNFOLLOW, userId });
export const createSetUsersAction = (users) => ({ type: SET_USERS, users });

export default usersReducer;