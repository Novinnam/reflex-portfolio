import { createContext, useContext, useMemo, useReducer, useState, createElement, useEffect } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "$/utils/state"
import { jsx } from "@emotion/react";

export const initialState = {"reflex___state____state": {"is_hydrated_rx_state_": false, "router_rx_state_": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": "", "raw_headers": {}}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}, "url": "", "route_id": ""}}, "reflex___state____state.my_resume___components____footer_state": {"today_rx_state_": "Friday 01 August at 22:51", "version_rx_state_": "1.0.0"}, "reflex___state____state.my_resume___my_resume____featured_projects_state": {"projects_rx_state_": [{"title": "Fetch", "description": "A compliance and buying SAAS for veterinary groups and their practices that I’ve helped co-found.", "image_url": "/fetch.jpg", "border": false}, {"title": "TACM", "description": "A construction management SAAS for pharmaceutical turnover & commissioning that I’ve helped co-found.", "image_url": "/tacm.jpg", "border": true}, {"title": "Event Fan Cam", "description": "A stand-alone brand activation that I’ve built, letting attendees at live events take-over the big-screen.", "image_url": "/event_fan_cam.jpg", "border": true}, {"title": "Backstage Experiential", "description": "With Backstage I help experiential marketing agencies wow their clients with cutting edge event-tech and digital brand activations.", "image_url": "/backstage.jpg", "border": false}]}, "reflex___state____state.my_resume___my_resume____hero_state": {"bio_rx_state_": "I'm Novin, an independent software developer from Luxembourg.", "description_rx_state_": "I run a few of my own software businesses while also helping companies get their own products and ideas off the ground. Read a bit more about me.", "location_rx_state_": "Luxembourg", "name_rx_state_": "Novin", "profile_image_rx_state_": "/profile.jpg", "social_links_rx_state_": [{"platform": "linkedin", "url": "https://www.linkedin.com/in/novinnnam/"}, {"platform": "github", "url": "https://github.com/Novinnam"}]}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}}

export const defaultColorMode = "system"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__my_resume___components____footer_state: createContext(null),
  reflex___state____state__my_resume___my_resume____featured_projects_state: createContext(null),
  reflex___state____state__my_resume___my_resume____hero_state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return createElement(
    UploadFilesContext.Provider,
    { value: [filesById, setFilesById] },
    children
  );
}

export function ClientSide(component) {
  return ({ children, ...props }) => {
    const [Component, setComponent] = useState(null);
    useEffect(() => {
      setComponent(component);
    }, []);
    return Component ? jsx(Component, props, children) : null;
  };
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return createElement(
    EventLoopContext.Provider,
    { value: [addEvents, connectErrors] },
    children
  );
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__my_resume___components____footer_state, dispatch_reflex___state____state__my_resume___components____footer_state] = useReducer(applyDelta, initialState["reflex___state____state.my_resume___components____footer_state"])
  const [reflex___state____state__my_resume___my_resume____featured_projects_state, dispatch_reflex___state____state__my_resume___my_resume____featured_projects_state] = useReducer(applyDelta, initialState["reflex___state____state.my_resume___my_resume____featured_projects_state"])
  const [reflex___state____state__my_resume___my_resume____hero_state, dispatch_reflex___state____state__my_resume___my_resume____hero_state] = useReducer(applyDelta, initialState["reflex___state____state.my_resume___my_resume____hero_state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.my_resume___components____footer_state": dispatch_reflex___state____state__my_resume___components____footer_state,
      "reflex___state____state.my_resume___my_resume____featured_projects_state": dispatch_reflex___state____state__my_resume___my_resume____featured_projects_state,
      "reflex___state____state.my_resume___my_resume____hero_state": dispatch_reflex___state____state__my_resume___my_resume____hero_state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
    }
  }, [])

  return (
    createElement(StateContexts.reflex___state____state,{value: reflex___state____state},
    createElement(StateContexts.reflex___state____state__my_resume___components____footer_state,{value: reflex___state____state__my_resume___components____footer_state},
    createElement(StateContexts.reflex___state____state__my_resume___my_resume____featured_projects_state,{value: reflex___state____state__my_resume___my_resume____featured_projects_state},
    createElement(StateContexts.reflex___state____state__my_resume___my_resume____hero_state,{value: reflex___state____state__my_resume___my_resume____hero_state},
    createElement(StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state,{value: reflex___state____state__reflex___state____frontend_event_exception_state},
    createElement(StateContexts.reflex___state____state__reflex___state____on_load_internal_state,{value: reflex___state____state__reflex___state____on_load_internal_state},
    createElement(StateContexts.reflex___state____state__reflex___state____update_vars_internal_state,{value: reflex___state____state__reflex___state____update_vars_internal_state},
    createElement(DispatchContext, {value: dispatchers}, children)
)))))))  )
}