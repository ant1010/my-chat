/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
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
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEventUser = /* GraphQL */ `
  query GetEventUser($id: ID!) {
    getEventUser(id: $id) {
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
export const listEventUsers = /* GraphQL */ `
  query ListEventUsers(
    $filter: ModelEventUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        eventRoomID
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        eventRoom {
          id
          lastEventID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventRoom = /* GraphQL */ `
  query GetEventRoom($id: ID!) {
    getEventRoom(id: $id) {
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
export const listEventRooms = /* GraphQL */ `
  query ListEventRooms(
    $filter: ModelEventRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const eventsByEventRoom = /* GraphQL */ `
  query EventsByEventRoom(
    $eventRoomID: ID
    $eventTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByEventRoom(
      eventRoomID: $eventRoomID
      eventTime: $eventTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
