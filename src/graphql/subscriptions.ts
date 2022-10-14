/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      imageUri
      status
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      imageUri
      status
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      imageUri
      status
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
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
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
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
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
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateEventUser = /* GraphQL */ `
  subscription OnCreateEventUser {
    onCreateEventUser {
      id
      userID
      eventRoomID
      user {
        id
        name
        imageUri
        status
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
        eventID
        event {
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
export const onUpdateEventUser = /* GraphQL */ `
  subscription OnUpdateEventUser {
    onUpdateEventUser {
      id
      userID
      eventRoomID
      user {
        id
        name
        imageUri
        status
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
        eventID
        event {
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
export const onDeleteEventUser = /* GraphQL */ `
  subscription OnDeleteEventUser {
    onDeleteEventUser {
      id
      userID
      eventRoomID
      user {
        id
        name
        imageUri
        status
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
        eventID
        event {
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
export const onCreateEventRoom = /* GraphQL */ `
  subscription OnCreateEventRoom {
    onCreateEventRoom {
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
      eventID
      event {
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
          eventID
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
export const onUpdateEventRoom = /* GraphQL */ `
  subscription OnUpdateEventRoom {
    onUpdateEventRoom {
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
      eventID
      event {
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
          eventID
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
export const onDeleteEventRoom = /* GraphQL */ `
  subscription OnDeleteEventRoom {
    onDeleteEventRoom {
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
      eventID
      event {
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
          eventID
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
        eventID
        event {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
        eventID
        event {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
        eventID
        event {
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
