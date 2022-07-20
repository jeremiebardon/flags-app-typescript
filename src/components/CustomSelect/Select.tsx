import {
  chakra,
  FormControlOptions,
  HTMLChakraProps,
  omitThemingProps,
  ThemingProps,
  useFormControl,
  useMergeRefs,
  useMultiStyleConfig,
  usePopper,
} from '@chakra-ui/react'
import { mergeWith } from '@chakra-ui/utils'
import * as React from 'react'
import { SelectIcon } from './SelectIcon'
import { useSelect } from 'downshift'

export interface SelectProps
  extends FormControlOptions,
    ThemingProps<'Select'>,
    Omit<
      HTMLChakraProps<'button'>,
      'disabled' | 'required' | 'readOnly' | 'size' | 'value' | 'onChange'
    > {
  placeholder?: string
  value?: string | null | undefined
  onChange?: (item: string | undefined) => void
}

export const CustomSelect = React.forwardRef<HTMLButtonElement, SelectProps>((props, ownRef) => {
  const { id, value, children, placeholder, onChange, ...rest } = omitThemingProps(props)
  const ownButtonProps = useFormControl<HTMLButtonElement>(rest)
  const styles = useMultiStyleConfig('CustomSelect', props)

  const validChildren = React.useMemo(
    () =>
      React.Children.toArray(children)
        .filter<React.ReactElement<{ value: string; children?: React.ReactElement }>>(
          React.isValidElement,
        )
        .filter((child) => 'value' in child.props),
    [children],
  )

  const items = validChildren.map((child) => child.props.value)

  const { isOpen, selectedItem, getToggleButtonProps, getMenuProps, getItemProps } = useSelect({
    id,
    items,
    selectedItem: value,
    onSelectedItemChange: (val: any) => onChange?.(val.selectedItem),
  })

  const { referenceRef: popperRef, getPopperProps } = usePopper({
    enabled: isOpen,
    gutter: 2,
  })
  const { ref: useSelectToggleButtonRef, ...useSelectToggleButtonProps } = getToggleButtonProps()

  const toggleButtonRef = useMergeRefs(ownRef, useSelectToggleButtonRef, popperRef)
  const toggleButtonProps = mergeWith(ownButtonProps, useSelectToggleButtonProps)

  return (
    <chakra.div position="relative">
      <chakra.button
        ref={toggleButtonRef}
        __css={styles.field}
        data-focus-visible-added={isOpen}
        {...toggleButtonProps}
      >
        {validChildren.find((child) => child.props.value === selectedItem)?.props.children ||
          selectedItem || <chakra.span color='gray.300'>{placeholder}</chakra.span>}
        <SelectIcon />
      </chakra.button>
      <chakra.div
        zIndex="1"
        width="100%"
        {...mergeWith(getPopperProps(), {
          style: { visibility: isOpen ? 'visible' : 'hidden' },
        })}
      >
        <chakra.ul __css={styles.menu} data-focus-visible-added={isOpen} {...getMenuProps()}>
          {isOpen &&
            validChildren.map((item, index) =>
              React.cloneElement(item, {
                __css: styles.option,
                ...getItemProps({ item: item.props.value, index }),
              }),
            )}
        </chakra.ul>
      </chakra.div>
    </chakra.div>
  )
})

CustomSelect.displayName = 'CustomSelect';
