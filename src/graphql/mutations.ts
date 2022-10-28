/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      friends {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      eventUser {
        items {
          id
          userID
          eventRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      friends {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      eventUser {
        items {
          id
          userID
          eventRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      friends {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      eventUser {
        items {
          id
          userID
          eventRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createEventUser = /* GraphQL */ `
  mutation CreateEventUser(
    $input: CreateEventUserInput!
    $condition: ModelEventUserConditionInput
  ) {
    createEventUser(input: $input, condition: $condition) {
      id
      userID
      eventRoomID
      user {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      eventRoom {
        id
        eventUsers {
          nextToken
        }
        events {
          nextToken
        }
        lastEventID
        lastEvent {
          id
          userID
          title
          createdAt
          content
          eventTime
          eventLocation
          eventRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEventUser = /* GraphQL */ `
  mutation UpdateEventUser(
    $input: UpdateEventUserInput!
    $condition: ModelEventUserConditionInput
  ) {
    updateEventUser(input: $input, condition: $condition) {
      id
      userID
      eventRoomID
      user {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      eventRoom {
        id
        eventUsers {
          nextToken
        }
        events {
          nextToken
        }
        lastEventID
        lastEvent {
          id
          userID
          title
          createdAt
          content
          eventTime
          eventLocation
          eventRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEventUser = /* GraphQL */ `
  mutation DeleteEventUser(
    $input: DeleteEventUserInput!
    $condition: ModelEventUserConditionInput
  ) {
    deleteEventUser(input: $input, condition: $condition) {
      id
      userID
      eventRoomID
      user {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      eventRoom {
        id
        eventUsers {
          nextToken
        }
        events {
          nextToken
        }
        lastEventID
        lastEvent {
          id
          userID
          title
          createdAt
          content
          eventTime
          eventLocation
          eventRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEventRoom = /* GraphQL */ `
  mutation CreateEventRoom(
    $input: CreateEventRoomInput!
    $condition: ModelEventRoomConditionInput
  ) {
    createEventRoom(input: $input, condition: $condition) {
      id
      eventUsers {
        items {
          id
          userID
          eventRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          userID
          title
          createdAt
          content
          eventTime
          eventLocation
          eventRoomID
          updatedAt
        }
        nextToken
      }
      lastEventID
      lastEvent {
        id
        userID
        title
        createdAt
        content
        eventTime
        eventLocation
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        eventRoomID
        eventRoom {
          id
          lastEventID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEventRoom = /* GraphQL */ `
  mutation UpdateEventRoom(
    $input: UpdateEventRoomInput!
    $condition: ModelEventRoomConditionInput
  ) {
    updateEventRoom(input: $input, condition: $condition) {
      id
      eventUsers {
        items {
          id
          userID
          eventRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          userID
          title
          createdAt
          content
          eventTime
          eventLocation
          eventRoomID
          updatedAt
        }
        nextToken
      }
      lastEventID
      lastEvent {
        id
        userID
        title
        createdAt
        content
        eventTime
        eventLocation
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        eventRoomID
        eventRoom {
          id
          lastEventID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEventRoom = /* GraphQL */ `
  mutation DeleteEventRoom(
    $input: DeleteEventRoomInput!
    $condition: ModelEventRoomConditionInput
  ) {
    deleteEventRoom(input: $input, condition: $condition) {
      id
      eventUsers {
        items {
          id
          userID
          eventRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          userID
          title
          createdAt
          content
          eventTime
          eventLocation
          eventRoomID
          updatedAt
        }
        nextToken
      }
      lastEventID
      lastEvent {
        id
        userID
        title
        createdAt
        content
        eventTime
        eventLocation
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        eventRoomID
        eventRoom {
          id
          lastEventID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      userID
      title
      createdAt
      content
      eventTime
      eventLocation
      user {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      eventRoomID
      eventRoom {
        id
        eventUsers {
          nextToken
        }
        events {
          nextToken
        }
        lastEventID
        lastEvent {
          id
          userID
          title
          createdAt
          content
          eventTime
          eventLocation
          eventRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      userID
      title
      createdAt
      content
      eventTime
      eventLocation
      user {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      eventRoomID
      eventRoom {
        id
        eventUsers {
          nextToken
        }
        events {
          nextToken
        }
        lastEventID
        lastEvent {
          id
          userID
          title
          createdAt
          content
          eventTime
          eventLocation
          eventRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      userID
      title
      createdAt
      content
      eventTime
      eventLocation
      user {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      eventRoomID
      eventRoom {
        id
        eventUsers {
          nextToken
        }
        events {
          nextToken
        }
        lastEventID
        lastEvent {
          id
          userID
          title
          createdAt
          content
          eventTime
          eventLocation
          eventRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
