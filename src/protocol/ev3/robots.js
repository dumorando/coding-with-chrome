/**
 * @fileoverview Predefined settings for the different EV3 roboters.
 *
 * @license Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */
goog.provide('cwc.protocol.ev3.Robots');



/**
 * EV3 EDU EDUCATOR
 * See EV3 education default instruction.
 */
cwc.protocol.ev3.Robots['EDUCATOR'] = {
  wheelDiameter: 54.5,
  wheelWidth: 28,
  wheelbase: 90
};


/**
 * EV3 TRACK3R
 * See http://www.lego.com/de-de/mindstorms/build-a-robot/track3r
 */
cwc.protocol.ev3.Robots['TRACK3R'] = {
  wheelDiameter: 32,
  wheelWidth: 20,
  wheelbase: 157
};


/**
 * GRYO BOY
 * See http://www.lego.com/de-de/mindstorms/build-a-robot/track3r
 */
cwc.protocol.ev3.Robots['GRYO BOY'] = {
  wheelDiameter: 54.5,
  wheelWidth: 30,
  wheelbase: 75
};
