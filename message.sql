/*
 Navicat Premium Data Transfer

 Source Server         : LocalHost
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : localhost:3306
 Source Schema         : my_homepage_comments

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 08/09/2019 06:56:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `comment` varchar(2555) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `comment_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES (36, '易乐安', 'whu_yla@163.com', 'hello!', '2019-09-07 22:27:18');
INSERT INTO `message` VALUES (37, 'mryi', NULL, 'hi!', '2019-09-08 22:46:29');
INSERT INTO `message` VALUES (38, '易乐安', 'whu_yla@163.com', '我爱你', '2019-09-07 22:50:44');
INSERT INTO `message` VALUES (39, '易乐安', 'whu_yla@163.com', '我爱你', '2019-09-07 22:51:18');
INSERT INTO `message` VALUES (40, '111', '', 'I miss you', '2019-09-07 22:52:32');
INSERT INTO `message` VALUES (41, '111', '', 'I miss you', '2019-09-07 22:53:18');
INSERT INTO `message` VALUES (42, '111', '', 'I miss you', '2019-09-07 22:54:26');
INSERT INTO `message` VALUES (43, '易乐安', '', 'I miss you', '2019-09-07 22:55:53');
INSERT INTO `message` VALUES (44, '易乐安', '', 'I miss you', '2019-09-07 22:56:19');

SET FOREIGN_KEY_CHECKS = 1;
