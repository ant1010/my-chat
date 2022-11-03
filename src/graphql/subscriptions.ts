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
      contacts {
        items {
          id
          firstUserID
          secondUserID
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
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
      owner
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
      contacts {
        items {
          id
          firstUserID
          secondUserID
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
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
      owner
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
      contacts {
        items {
          id
          firstUserID
          secondUserID
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
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
      owner
    }
  }
`;
export const onCreateFriendPair = /* GraphQL */ `
  subscription OnCreateFriendPair($owner: String!) {
    onCreateFriendPair(owner: $owner) {
      id
      firstUserID
      secondUserID
      userOne {
        id
        name
        imageUri
        status
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      userTwo {
        id
        name
        imageUri
        status
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFriendPair = /* GraphQL */ `
  subscription OnUpdateFriendPair($owner: String!) {
    onUpdateFriendPair(owner: $owner) {
      id
      firstUserID
      secondUserID
      userOne {
        id
        name
        imageUri
        status
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      userTwo {
        id
        name
        imageUri
        status
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFriendPair = /* GraphQL */ `
  subscription OnDeleteFriendPair($owner: String!) {
    onDeleteFriendPair(owner: $owner) {
      id
      firstUserID
      secondUserID
      userOne {
        id
        name
        imageUri
        status
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      userTwo {
        id
        name
        imageUri
        status
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      status
      createdAt
      updatedAt
      owner
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
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          owner
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
          owner
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
          owner
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
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          owner
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
          owner
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
          owner
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
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
        contacts {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        eventUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
