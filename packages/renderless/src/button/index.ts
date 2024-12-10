/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import type { IButtonRenderlessParams, IButtonState } from '@/types'
import { xss } from '../common/xss'

export const handleClick =
  ({ emit, props, state, designConfig }: Pick<IButtonRenderlessParams, 'emit' | 'props' | 'state' | 'designConfig'>) =>
  (event: MouseEvent): void => {
    const urlHref = xss.filterUrl(props.href)
    const DEFAULT_RESETTIME = 1000

    let resetTime = DEFAULT_RESETTIME

    if (props.resetTime !== DEFAULT_RESETTIME) {
      resetTime = props.resetTime
    } else {
      resetTime = designConfig?.props?.resetTime ?? props.resetTime
    }

    if (urlHref) {
      location.href = urlHref
    } else if (props.nativeType === 'button' && resetTime > 0) {
      state.disabled = true

      state.timer = window.setTimeout(() => {
        state.disabled = false
      }, resetTime)
    }

    emit('click', event)
  }

export const clearTimer = (state: IButtonState) => (): void => clearTimeout(state.timer)
