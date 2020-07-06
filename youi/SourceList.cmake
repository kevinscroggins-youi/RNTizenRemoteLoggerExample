# =============================================================================
# © You i Labs Inc. 2000-2020. All rights reserved.

set(SOURCE_TIZEN-NACL
    src/logging/YiTizenNaClRemoteLoggerSink.cpp
)

set(HEADERS_TIZEN-NACL
    src/logging/YiTizenNaClRemoteLoggerSink.h
)

set (YI_PROJECT_SOURCE
    src/App.cpp
    src/AppFactory.cpp
    ${SOURCE_${YI_PLATFORM_UPPER}}
)

set (YI_PROJECT_HEADERS
    src/App.h
    ${HEADERS_${YI_PLATFORM_UPPER}}
)
