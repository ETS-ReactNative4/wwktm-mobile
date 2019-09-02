import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Row from '../../components/Row';
import ActionButton from '../../components/ActionButton';
import { Avatar, Divider, Card } from 'react-native-paper';
import { getPostTime } from '../../utils/date';
import { getNameInitials } from './../../utils/string';
import Colors from '../../configs/colors';

const PostItem = ({ feed, onLikePress, onCommentPress }) => {
  const { profileImageUrl, postImage, content, name, date } = feed;
  return (
    <View style={styles.rootContainer}>
      <Row>
        {profileImageUrl ? (
          <Avatar.Image
            size={36}
            source={{
              uri: profileImageUrl,
            }}
          />
        ) : (
          <Avatar.Text
            size={36}
            color={Colors.white}
            label={getNameInitials(name)}
          />
        )}

        <View style={{ paddingHorizontal: 5 }}>
          <Text>{name}</Text>
          <Text style={styles.dateText}>{getPostTime(date)}</Text>
        </View>
      </Row>
      <Text style={styles.descriptionText}>{content}</Text>
      {postImage && (
        <Image
          style={styles.imageStyle}
          source={{
            uri: postImage,
          }}
        />
      )}
      <Row style={styles.bottomRowContainer}>
        <Text style={styles.countText}>5 Likes</Text>
        <Text style={styles.countText}>10 Comment</Text>
      </Row>
      <Row style={styles.bottomRowContainer}>
        <ActionButton iconName="heart" title="Like" onPress={onLikePress} />
        <ActionButton
          iconName="comment"
          title="Comment"
          onPress={onCommentPress}
        />
      </Row>
      <Divider style={{ marginTop: 8 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    padding: 16,

    borderColor: '#808080',
  },
  dateText: {
    color: '#808080',
    paddingTop: 3,
  },
  descriptionText: {
    paddingTop: 10,
  },
  bottomRowContainer: {
    paddingTop: 10,
  },
  countText: {
    fontSize: 14,
    color: '#808080',
    paddingRight: 10,
  },
  imageStyle: {
    height: 300,
    width: '100%',
    marginTop: 10,
  },
});

export default PostItem;
