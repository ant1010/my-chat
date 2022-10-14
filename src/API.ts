/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
  status?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  imageUri?: string | null,
  status?: string | null,
  chatRoomUser?: ModelChatRoomUserConnection | null,
  eventUser?: ModelEventUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChatRoomUserConnection = {
  __typename: "ModelChatRoomUserConnection",
  items:  Array<ChatRoomUser | null >,
  nextToken?: string | null,
};

export type ChatRoomUser = {
  __typename: "ChatRoomUser",
  id: string,
  userID: string,
  chatRoomID: string,
  user?: User | null,
  chatRoom?: ChatRoom | null,
  createdAt: string,
  updatedAt: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  chatRoomUsers?: ModelChatRoomUserConnection | null,
  messages?: ModelMessageConnection | null,
  lastMessageID?: string | null,
  lastMessage?: Message | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  createdAt: string,
  content: string,
  userID: string,
  chatRoomID: string,
  user?: User | null,
  chatRoom?: ChatRoom | null,
  updatedAt: string,
};

export type ModelEventUserConnection = {
  __typename: "ModelEventUserConnection",
  items:  Array<EventUser | null >,
  nextToken?: string | null,
};

export type EventUser = {
  __typename: "EventUser",
  id: string,
  userID: string,
  eventRoomID: string,
  user?: User | null,
  eventRoom?: EventRoom | null,
  createdAt: string,
  updatedAt: string,
};

export type EventRoom = {
  __typename: "EventRoom",
  id: string,
  eventUsers?: ModelEventUserConnection | null,
  eventID?: string | null,
  event?: Event | null,
  createdAt: string,
  updatedAt: string,
};

export type Event = {
  __typename: "Event",
  id: string,
  userID: string,
  title: string,
  createdAt: string,
  content?: string | null,
  eventTime: string,
  eventLocation: string,
  user?: User | null,
  eventRoomID: string,
  eventRoom?: EventRoom | null,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  status?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateChatRoomUserInput = {
  id?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelChatRoomUserConditionInput = {
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserConditionInput | null > | null,
  or?: Array< ModelChatRoomUserConditionInput | null > | null,
  not?: ModelChatRoomUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateChatRoomUserInput = {
  id: string,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteChatRoomUserInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  lastMessageID?: string | null,
};

export type ModelChatRoomConditionInput = {
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  lastMessageID?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  content: string,
  userID: string,
  chatRoomID: string,
};

export type ModelMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  createdAt?: string | null,
  content?: string | null,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateEventUserInput = {
  id?: string | null,
  userID: string,
  eventRoomID: string,
};

export type ModelEventUserConditionInput = {
  userID?: ModelIDInput | null,
  eventRoomID?: ModelIDInput | null,
  and?: Array< ModelEventUserConditionInput | null > | null,
  or?: Array< ModelEventUserConditionInput | null > | null,
  not?: ModelEventUserConditionInput | null,
};

export type UpdateEventUserInput = {
  id: string,
  userID?: string | null,
  eventRoomID?: string | null,
};

export type DeleteEventUserInput = {
  id: string,
};

export type CreateEventRoomInput = {
  id?: string | null,
  eventID?: string | null,
};

export type ModelEventRoomConditionInput = {
  eventID?: ModelIDInput | null,
  and?: Array< ModelEventRoomConditionInput | null > | null,
  or?: Array< ModelEventRoomConditionInput | null > | null,
  not?: ModelEventRoomConditionInput | null,
};

export type UpdateEventRoomInput = {
  id: string,
  eventID?: string | null,
};

export type DeleteEventRoomInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  userID: string,
  title: string,
  createdAt?: string | null,
  content?: string | null,
  eventTime: string,
  eventLocation: string,
  eventRoomID: string,
};

export type ModelEventConditionInput = {
  userID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  eventTime?: ModelStringInput | null,
  eventLocation?: ModelStringInput | null,
  eventRoomID?: ModelIDInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type UpdateEventInput = {
  id: string,
  userID?: string | null,
  title?: string | null,
  createdAt?: string | null,
  content?: string | null,
  eventTime?: string | null,
  eventLocation?: string | null,
  eventRoomID?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelChatRoomUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserFilterInput | null > | null,
  or?: Array< ModelChatRoomUserFilterInput | null > | null,
  not?: ModelChatRoomUserFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelEventUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  eventRoomID?: ModelIDInput | null,
  and?: Array< ModelEventUserFilterInput | null > | null,
  or?: Array< ModelEventUserFilterInput | null > | null,
  not?: ModelEventUserFilterInput | null,
};

export type ModelEventRoomFilterInput = {
  id?: ModelIDInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelEventRoomFilterInput | null > | null,
  or?: Array< ModelEventRoomFilterInput | null > | null,
  not?: ModelEventRoomFilterInput | null,
};

export type ModelEventRoomConnection = {
  __typename: "ModelEventRoomConnection",
  items:  Array<EventRoom | null >,
  nextToken?: string | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  eventTime?: ModelStringInput | null,
  eventLocation?: ModelStringInput | null,
  eventRoomID?: ModelIDInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventUser?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventUser?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventUser?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomUserMutationVariables = {
  input: CreateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type CreateChatRoomUserMutation = {
  createChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomUserMutationVariables = {
  input: UpdateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type UpdateChatRoomUserMutation = {
  updateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomUserMutationVariables = {
  input: DeleteChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type DeleteChatRoomUserMutation = {
  deleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateEventUserMutationVariables = {
  input: CreateEventUserInput,
  condition?: ModelEventUserConditionInput | null,
};

export type CreateEventUserMutation = {
  createEventUser?:  {
    __typename: "EventUser",
    id: string,
    userID: string,
    eventRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventUserMutationVariables = {
  input: UpdateEventUserInput,
  condition?: ModelEventUserConditionInput | null,
};

export type UpdateEventUserMutation = {
  updateEventUser?:  {
    __typename: "EventUser",
    id: string,
    userID: string,
    eventRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventUserMutationVariables = {
  input: DeleteEventUserInput,
  condition?: ModelEventUserConditionInput | null,
};

export type DeleteEventUserMutation = {
  deleteEventUser?:  {
    __typename: "EventUser",
    id: string,
    userID: string,
    eventRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventRoomMutationVariables = {
  input: CreateEventRoomInput,
  condition?: ModelEventRoomConditionInput | null,
};

export type CreateEventRoomMutation = {
  createEventRoom?:  {
    __typename: "EventRoom",
    id: string,
    eventUsers?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventID?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      userID: string,
      title: string,
      createdAt: string,
      content?: string | null,
      eventTime: string,
      eventLocation: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventRoomID: string,
      eventRoom?:  {
        __typename: "EventRoom",
        id: string,
        eventID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventRoomMutationVariables = {
  input: UpdateEventRoomInput,
  condition?: ModelEventRoomConditionInput | null,
};

export type UpdateEventRoomMutation = {
  updateEventRoom?:  {
    __typename: "EventRoom",
    id: string,
    eventUsers?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventID?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      userID: string,
      title: string,
      createdAt: string,
      content?: string | null,
      eventTime: string,
      eventLocation: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventRoomID: string,
      eventRoom?:  {
        __typename: "EventRoom",
        id: string,
        eventID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventRoomMutationVariables = {
  input: DeleteEventRoomInput,
  condition?: ModelEventRoomConditionInput | null,
};

export type DeleteEventRoomMutation = {
  deleteEventRoom?:  {
    __typename: "EventRoom",
    id: string,
    eventUsers?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventID?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      userID: string,
      title: string,
      createdAt: string,
      content?: string | null,
      eventTime: string,
      eventLocation: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventRoomID: string,
      eventRoom?:  {
        __typename: "EventRoom",
        id: string,
        eventID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    userID: string,
    title: string,
    createdAt: string,
    content?: string | null,
    eventTime: string,
    eventLocation: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoomID: string,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    userID: string,
    title: string,
    createdAt: string,
    content?: string | null,
    eventTime: string,
    eventLocation: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoomID: string,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    userID: string,
    title: string,
    createdAt: string,
    content?: string | null,
    eventTime: string,
    eventLocation: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoomID: string,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventUser?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomUserQueryVariables = {
  id: string,
};

export type GetChatRoomUserQuery = {
  getChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomUsersQueryVariables = {
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomUsersQuery = {
  listChatRoomUsers?:  {
    __typename: "ModelChatRoomUserConnection",
    items:  Array< {
      __typename: "ChatRoomUser",
      id: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventUserQueryVariables = {
  id: string,
};

export type GetEventUserQuery = {
  getEventUser?:  {
    __typename: "EventUser",
    id: string,
    userID: string,
    eventRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventUsersQueryVariables = {
  filter?: ModelEventUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventUsersQuery = {
  listEventUsers?:  {
    __typename: "ModelEventUserConnection",
    items:  Array< {
      __typename: "EventUser",
      id: string,
      userID: string,
      eventRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventRoom?:  {
        __typename: "EventRoom",
        id: string,
        eventID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventRoomQueryVariables = {
  id: string,
};

export type GetEventRoomQuery = {
  getEventRoom?:  {
    __typename: "EventRoom",
    id: string,
    eventUsers?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventID?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      userID: string,
      title: string,
      createdAt: string,
      content?: string | null,
      eventTime: string,
      eventLocation: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventRoomID: string,
      eventRoom?:  {
        __typename: "EventRoom",
        id: string,
        eventID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventRoomsQueryVariables = {
  filter?: ModelEventRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventRoomsQuery = {
  listEventRooms?:  {
    __typename: "ModelEventRoomConnection",
    items:  Array< {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    userID: string,
    title: string,
    createdAt: string,
    content?: string | null,
    eventTime: string,
    eventLocation: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoomID: string,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      userID: string,
      title: string,
      createdAt: string,
      content?: string | null,
      eventTime: string,
      eventLocation: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventRoomID: string,
      eventRoom?:  {
        __typename: "EventRoom",
        id: string,
        eventID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatRoomQueryVariables = {
  chatRoomID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatRoomQuery = {
  messagesByChatRoom?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EventsByEventRoomQueryVariables = {
  eventRoomID?: string | null,
  eventTime?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventsByEventRoomQuery = {
  eventsByEventRoom?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      userID: string,
      title: string,
      createdAt: string,
      content?: string | null,
      eventTime: string,
      eventLocation: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventRoomID: string,
      eventRoom?:  {
        __typename: "EventRoom",
        id: string,
        eventID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventUser?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventUser?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventUser?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomUserSubscription = {
  onCreateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomUserSubscription = {
  onUpdateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomUserSubscription = {
  onDeleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateEventUserSubscription = {
  onCreateEventUser?:  {
    __typename: "EventUser",
    id: string,
    userID: string,
    eventRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventUserSubscription = {
  onUpdateEventUser?:  {
    __typename: "EventUser",
    id: string,
    userID: string,
    eventRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventUserSubscription = {
  onDeleteEventUser?:  {
    __typename: "EventUser",
    id: string,
    userID: string,
    eventRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventRoomSubscription = {
  onCreateEventRoom?:  {
    __typename: "EventRoom",
    id: string,
    eventUsers?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventID?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      userID: string,
      title: string,
      createdAt: string,
      content?: string | null,
      eventTime: string,
      eventLocation: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventRoomID: string,
      eventRoom?:  {
        __typename: "EventRoom",
        id: string,
        eventID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventRoomSubscription = {
  onUpdateEventRoom?:  {
    __typename: "EventRoom",
    id: string,
    eventUsers?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventID?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      userID: string,
      title: string,
      createdAt: string,
      content?: string | null,
      eventTime: string,
      eventLocation: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventRoomID: string,
      eventRoom?:  {
        __typename: "EventRoom",
        id: string,
        eventID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventRoomSubscription = {
  onDeleteEventRoom?:  {
    __typename: "EventRoom",
    id: string,
    eventUsers?:  {
      __typename: "ModelEventUserConnection",
      items:  Array< {
        __typename: "EventUser",
        id: string,
        userID: string,
        eventRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    eventID?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      userID: string,
      title: string,
      createdAt: string,
      content?: string | null,
      eventTime: string,
      eventLocation: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventRoomID: string,
      eventRoom?:  {
        __typename: "EventRoom",
        id: string,
        eventID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    userID: string,
    title: string,
    createdAt: string,
    content?: string | null,
    eventTime: string,
    eventLocation: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoomID: string,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    userID: string,
    title: string,
    createdAt: string,
    content?: string | null,
    eventTime: string,
    eventLocation: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoomID: string,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    userID: string,
    title: string,
    createdAt: string,
    content?: string | null,
    eventTime: string,
    eventLocation: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      eventUser?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventRoomID: string,
    eventRoom?:  {
      __typename: "EventRoom",
      id: string,
      eventUsers?:  {
        __typename: "ModelEventUserConnection",
        nextToken?: string | null,
      } | null,
      eventID?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        userID: string,
        title: string,
        createdAt: string,
        content?: string | null,
        eventTime: string,
        eventLocation: string,
        eventRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};
