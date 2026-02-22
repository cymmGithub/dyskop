import React, { forwardRef } from "react";
import { fixPolishOrphans } from "@/lib/typography";

function processChildren(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (typeof child === "string") {
      return fixPolishOrphans(child);
    }
    if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
      return React.cloneElement(child, {
        children: processChildren(child.props.children),
      });
    }
    return child;
  });
}

function createTextComponent<T extends keyof React.JSX.IntrinsicElements>(
  tag: T
) {
  const Component = forwardRef<
    HTMLElementTagNameMap[T & keyof HTMLElementTagNameMap],
    React.JSX.IntrinsicElements[T]
  >((props, ref) => {
    const { children, ...rest } = props;
    return React.createElement(
      tag,
      { ...rest, ref },
      processChildren(children)
    );
  });
  Component.displayName = tag.charAt(0).toUpperCase() + tag.slice(1);
  return Component;
}

export const P = createTextComponent("p");
export const H1 = createTextComponent("h1");
export const H2 = createTextComponent("h2");
export const H3 = createTextComponent("h3");
export const Span = createTextComponent("span");
export const Li = createTextComponent("li");
