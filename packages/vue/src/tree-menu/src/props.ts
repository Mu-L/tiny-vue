import { iconSearch } from '@opentiny/vue-icon'
import { $props } from '@opentiny/vue-common'

export const treeMenuProps = {
  ...$props,
  placeholder: {
    default: '',
    type: String
  },
  data: Array,
  nodeKey: String,
  defaultExpandAll: Boolean,
  suffixIcon: Object,
  searchIcon: {
    type: Object,
    default: () => iconSearch()
  },
  props: Object,
  draggable: {
    type: Boolean,
    default: false
  },
  emptyText: {
    type: String,
    default: ''
  },
  checkStrictly: Boolean,
  lazy: {
    type: Boolean,
    default: false
  },
  load: Function,
  showCheckbox: Boolean,
  filterNodeMethod: Function,
  defaultCheckedKeys: Array,
  defaultExpandedKeys: Array,
  defaultExpandedKeysHighlight: [Number, String],
  indent: {
    type: Number,
    default: 16
  },
  allowDrag: Function,
  allowDrop: Function,
  expandOnClickNode: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: false
  },
  wrap: {
    type: Boolean,
    default: false
  },
  getMenuDataSync: Function,
  accordion: Boolean,
  showTitle: {
    type: Boolean,
    default: true
  },
  showFilter: {
    type: Boolean,
    default: true
  },
  showExpand: {
    type: Boolean,
    default: false
  },
  collapsible: {
    type: Boolean,
    default: true
  },
  showNumber: {
    type: Boolean,
    default: false
  },
  nodeHeight: Number,
  onlyCheckChildren: {
    type: Boolean,
    default: false
  },
  menuCollapsible: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  highlightQuery: {
    type: Boolean,
    default: false
  },
  // metaErp 新增属性
  widthAdapt: {
    type: Boolean,
    default: false
  }
}