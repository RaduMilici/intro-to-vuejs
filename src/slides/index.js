import Welcome from "./0_Welcome/0_Welcome";
import HistoryTitle from "./ChapterTitles/1_History";
import History from "./1_History/1_History";
import Timeline from "./2_Timeline/2_Timeline";
import WhatIsVueTitle from "./ChapterTitles/2_What_is_Vue";
import WhatIsVue from "./3_What_is_vue/3_0_What_is_vue";
import WhatIsVueWarn from "./3_What_is_vue/3_1_warning";
import Installation from "./3_What_is_vue/3_2_Installation";
import VueInstanceTitle from "./ChapterTitles/3_instance";
import FirstApp from "./3_What_is_vue/3_3_first_app";
import VueFunction from "./3_What_is_vue/3_4_0_vue_function";
import VueInstance from "./3_What_is_vue/3_4_vue_instance";
import BasicPropsTitle from "./ChapterTitles/4_basic_props";
import Data from "./3_What_is_vue/3_5_data";
import DataWarn from "./3_What_is_vue/3_6_data_warn";
import Computed from "./3_What_is_vue/3_7_computed";
import ComputedCode from "./3_What_is_vue/3_8_computedCode";
import Methods from "./3_What_is_vue/3_9_methods";
import MethodsCode from "./3_What_is_vue/3_10_methodsCode";
import ComputedVsMethod from "./3_What_is_vue/3_11_ComputedVsMethod";
import ComputedVsMethodsCode from "./3_What_is_vue/3_12_ComputedVsMethodsCode";
import LifecycleHooksTitle from "./ChapterTitles/5_lifecycle_hooks";
import LifecycleHooks from "./3_What_is_vue/3_13_LifecycleHooks";
import LifecycleHooks2 from "./3_What_is_vue/3_14_Lifecycle_hooks_2";
import LifecycleHooks_create from "./3_What_is_vue/3_14_0_Lifecycle_0";
import LifecycleHooks_mount from "./3_What_is_vue/3_14_0_Lifecycle_1";
import LifecycleHooks_destroy from "./3_What_is_vue/3_14_0_Lifecycle_2";
import LifecycleHooksCode from "./3_What_is_vue/3_15_Lifecycle_hooks_code";
import TemplateSyntaxTitle from "./ChapterTitles/6_template_syntax";
import TemplateSyntax from "./3_What_is_vue/3_16_TemplateSyntax";
import Declarative from "./3_What_is_vue/3_17_declarative";
import Interpolations from "./3_What_is_vue/3_18_interpolations";
import StatementsExpressions from "./3_What_is_vue/3_19_statements_expressions";
import InterpolationsCode from "./3_What_is_vue/3_19_2_interpolation_code";
import xssAttack from "./3_What_is_vue/3_20_xss_attack";
import ClassStyleTitle from "./ChapterTitles/7_class_style";
import ClassStyle from "./3_What_is_vue/3_21_classStyle";
import ObjectBinding from "./3_What_is_vue/3_22_class_binding";
import ObjectBindingCode from "./3_What_is_vue/3_33_class_binding_code";
import InlineTooVerbose from "./3_What_is_vue/3_34_1_inline_class_too_verbose";
import ComputedBindingCode from "./3_What_is_vue/3_34_computed_class_binding";
import ArrayClassBinding from "./3_What_is_vue/3_35_array_class_binding";
import ArrayClassBindingCode from "./3_What_is_vue/3_36_array_class_binding_code";
import InlineStyleBinding from "./3_What_is_vue/3_37_inline_style_binding";
import es6InlineStyle from "./3_What_is_vue/3_38_inline_style_es6_shorthand";
import inlineStyleBindingCode from "./3_What_is_vue/3_39_inline_style_binding_code";
import inlineStyleBindingVerbose from "./3_What_is_vue/3_40_inline_style_too_verbose";
import dataStyleCode from "./3_What_is_vue/3_41_data_style_code";
import autoprefix from "./3_What_is_vue/3_42_autoprefix";
import conditionalRenderingTitle from "./ChapterTitles/8_conditional_rendering";
import conditionalRendering from "./3_What_is_vue/3_43_conditional_rendering";
import vIf from "./3_What_is_vue/3_44_vif";
import vIfCode from "./3_What_is_vue/3_45_vIf_code";
import vIfGroup from "./3_What_is_vue/3_46_vif_group";
import vIfGroupCode from "./3_What_is_vue/3_47_vIf_template_code";
import vElse from "./3_What_is_vue/3_48_velse_group";
import vElseCode from "./3_What_is_vue/3_49_vElseCode";
import vElseIf from "./3_What_is_vue/3_50_vElseIf";
import vElseIfCode from "./3_What_is_vue/3_51_vElseIfCode";
import vShow from "./3_What_is_vue/3_52_vShow";
import listRenderingTitle from "./ChapterTitles/9_List_Rendering";
import vFor from "./3_What_is_vue/3_54_vFor";
import vForCode from "./3_What_is_vue/3_55_vForCode";
import vForObjects from "./3_What_is_vue/3_55_1_vForObject";
import vForObjectsCode from "./3_What_is_vue/3_56_vForObjectCode";
import vForKey from "./3_What_is_vue/3_57_key";
import vForKeyCode from "./3_What_is_vue/3_58_keyCode";
import vForComputedCode from "./3_What_is_vue/3_59_vForComputed";
import eventsTitle from "./ChapterTitles/10_events";
import click from "./3_What_is_vue/3_60_click";
import clickCode from "./3_What_is_vue/3_61_clickCode";
import methodEventHandlers from "./3_What_is_vue/3_62_clickMethod";
import clickHandlerCode from "./3_What_is_vue/3_63_clickMethodCode";
import clickInlineHandlerCode from "./3_What_is_vue/3_64_clickInlineMethodCode";
import eventModifiers from "./3_What_is_vue/3_65_eventModifiers";

const slides = [
  Welcome,
  HistoryTitle,
  History,
  Timeline,
  WhatIsVueTitle,
  WhatIsVueWarn,
  WhatIsVue,
  Installation,
  VueInstanceTitle,
  VueFunction,
  VueInstance,
  FirstApp,
  TemplateSyntaxTitle,
  TemplateSyntax,
  Declarative,
  Interpolations,
  StatementsExpressions,
  InterpolationsCode,
  xssAttack,
  BasicPropsTitle,
  Data,
  DataWarn,
  Computed,
  ComputedCode,
  Methods,
  MethodsCode,
  ComputedVsMethod,
  ComputedVsMethodsCode,
  LifecycleHooksTitle,
  LifecycleHooks,
  LifecycleHooks_create,
  LifecycleHooks_mount,
  LifecycleHooks_destroy,
  LifecycleHooksCode,
  LifecycleHooks2,
  ClassStyleTitle,
  ClassStyle,
  ObjectBinding,
  ObjectBindingCode,
  InlineTooVerbose,
  ComputedBindingCode,
  ArrayClassBinding,
  ArrayClassBindingCode,
  InlineStyleBinding,
  es6InlineStyle,
  inlineStyleBindingCode,
  inlineStyleBindingVerbose,
  dataStyleCode,
  autoprefix,
  conditionalRenderingTitle,
  conditionalRendering,
  vIf,
  vIfCode,
  vIfGroup,
  vIfGroupCode,
  vElse,
  vElseCode,
  vElseIf,
  vElseIfCode,
  vShow,
  listRenderingTitle,
  vFor,
  vForCode,
  vForObjects,
  vForObjectsCode,
  vForKey,
  vForKeyCode,
  vForComputedCode,
  eventsTitle,
  click,
  clickCode,
  methodEventHandlers,
  clickHandlerCode,
  clickInlineHandlerCode,
  eventModifiers
];

export default slides;
