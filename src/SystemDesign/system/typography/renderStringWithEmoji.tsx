import createEmojiRegex from 'emoji-regex';
import React, { Fragment, ReactNode } from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

const emojiRegex = createEmojiRegex();
const styles = StyleSheet.create({
  emoji: {
    color: 'black',
    fontFamily: 'System',
  },
});

type StringNode = string | (string | null)[];

export const nodeHasEmoji = (children: ReactNode) =>
  (Array.isArray(children) ? children : [children]).some(
    child => typeof child === 'string' && createEmojiRegex().test(child),
  );

export const nodeIsString = (children: ReactNode): children is StringNode =>
  typeof children === 'string' ||
  (Array.isArray(children) &&
    children.every(child => typeof child === 'string' || child === null));

export const renderStringWithEmoji = (stringNode: StringNode) => {
  const strings = Array.isArray(stringNode) ? stringNode : [stringNode];

  return (
    <Fragment>
      {strings.map(node => {
        if (typeof node !== 'string') {
          return node;
        }

        const string = node;
        const emojis = string.match(emojiRegex);

        if (emojis === null) {
          return string;
        }

        return string.split(emojiRegex).map((stringPart, index) => (
          <Fragment key={index}>
            {stringPart}
            {emojis[index] ? (
              <NativeText style={styles.emoji}>{emojis[index]}</NativeText>
            ) : null}
          </Fragment>
        ));
      })}
    </Fragment>
  );
};
