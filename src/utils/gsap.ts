import { gsap } from "gsap-trial";

import { CustomEase } from "gsap-trial/CustomEase";

/* The following eases are Club GSAP perks */
import { CustomBounce } from "gsap-trial/CustomBounce"; // extends CustomEase
import { CustomWiggle } from "gsap-trial/CustomWiggle"; // extends CustomEase

/* The following plugins are Club GSAP perks */
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import { GSDevTools } from "gsap-trial/GSDevTools";
import { InertiaPlugin } from "gsap-trial/InertiaPlugin";
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";
import { MotionPathHelper } from "gsap-trial/MotionPathHelper";
import { Physics2DPlugin } from "gsap-trial/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap-trial/PhysicsPropsPlugin";
import { ScrambleTextPlugin } from "gsap-trial/ScrambleTextPlugin";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(
  DrawSVGPlugin,
  ScrollSmoother,
  GSDevTools,
  InertiaPlugin,
  MorphSVGPlugin,
  MotionPathHelper,
  Physics2DPlugin,
  PhysicsPropsPlugin,
  ScrambleTextPlugin,
  SplitText,
  CustomEase,
  CustomBounce,
  CustomWiggle,
  useGSAP
);
